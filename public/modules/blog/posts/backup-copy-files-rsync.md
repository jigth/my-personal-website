<h1 id="title">Rsync, a faster backup option</h1>

<img id="featured-img" src="/modules/blog/assets/rsync-1/backup-rsync.webp" alt="backup with rsync" />

Have you ever tried to move files between two computers and you only got GUI options based on FTP (File Transfer Protocol) and the old-reliable SCP option?

Well, sometimes you have a great UI option and that's enough to met your needs, _but sometimes that's not enough_ as you may want to do something custom, automate something using a script and still have reliability and performance at the same time.

FTP and its secure version SFTP are really useful file transfer protocols and most hosting providers offer them as a way to access and modify files, they can also be useful to make backups depending on the situation using an FTP client like [Filezilla](https://filezilla-project.org/) and if that's enough, good for you!

But sometimes, using FTP or SCP is not fast or reliable enough for your needs as both of these protocols don't guarantee that everything you transfered was transfered succesfully and tend to be relatively slow, transfering just a single file at a time.

Nonetheless _don't worry about that just yet, Rsync is here to help!_ it can transfer multiple files parallelly, show progress, be reliable and do it fast! If a transfer fails for any reason you don't have to start it all over again or check which files you transfer and which files you already have, Rsync does that for you automagically.

## The problems of the simplest options

### The problems of FTP (and SFTP)

* Transfers files in a serial way according to its specification [RFC 959](http://www.faqs.org/rfcs/rfc959.html). And don't support parallelization natively.

* Tends to be decent for few files and short modifications but suffers a lot when transfering a lot of files, it takes some time even for files with almost no info (a few Kilobytes). Some clients such as FileZilla offer parallelization capabilities but don't make this protocol especially effective though.

* Lacks reliability, if some transfer file one may have to check the logs to be able to know what has failed and it is no trivial task to ensure that all files have been transfered without having to redo the process in case of network fail.

### The problems of SCP

* Good for a few files but lacks scalability too, and reliability, for reasons similar to the FTP protocol.

* Less convenient than FTP (and SFTP) for simple modifications, especially for non-technical users.

## Rsync, a great alternative

Now, welcome to Rsync, a free and open source tool that you can use for any comercial or hobbie purpose completely free, you can even read its source code if that's what you want ([See their repo](https://github.com/RsyncProject/rsync)).

It has the following advantages:

* **Reliable:** If the network fails when you're transfering your files you can recall it again and be assured that it will continue the transferring process from the point it was left the last time it failed.

* **Secure:** It can be used over SSH protocol to guarantee encryption on the transport layer (similar to HTTPS).

* ***Blazingly fast:*** Transfer files parallelly so you don't have to wait a lot of time when you have lots and lots of small files, a real example of transfering a lot of little files may be transfering a whole Wordpress site without compressing it first, that's about 3000 files in July of 2024. It would take quite some time to download them using the FTP or SCP protocols.


## Experiments - (S)FTP vs SCP vs Rsync

### Context

The experiment was done using different software tools such as SCP, FileZilla (FTP), Rsync and SSH. Using two different machines, my local machine and an AWS EC2 t2.micro machine.

All the files were generated automatically using a Python3 script and the “lorem” library and each generated file contains between one and fifty random paragraphs. The script is available [here](https://github.com/jigth/Simple-Files-Generator/tree/master)

### Experiment 1 - Transfering 1000 files using FTP.

For the first experiment I’ll use FTP, SFTP would have identical performance (if not a little bit less) as it is FTP but with encryption over the transport layer.

It is possible to use the FileZIlla client or a CLI option, I’ll show the GUI option and its logs as that's the most common way to use FTP.

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/filezilla.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/filezilla.png" alt="FileZilla FTP UI Client" />
    </a>
    <span class="post-img-container__legend">
        FileZilla software transfering 1000 files from remote server to local machine
    </span>
</div>

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/filezilla-logs-begin.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/filezilla-logs-begin.png" alt="FileZilla FTP UI Client" />
    </a>
    <span class="post-img-container__legend">FileZilla log showing the first file transfer</span>
</div>

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/filezilla-logs-end.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/filezilla-logs-end.png" alt="FileZilla FTP UI Client" />
    </a>
    <span class="post-img-container__legend">FileZilla log showing the last file transfer (1000th file)</span>
</div>


Looking at the end and start dates, when we subtract those we can see that it took 269 seconds! That’s about 4.5 minutes for transferring only 18MB of data over, the info about the file size and number of files is presented below.

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/files-transfer-info.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/files-transfer-info.png" alt="FileZilla FTP UI Client" />
    </a>
    <span class="post-img-container__legend">Info about the number of files and file size within “dir2” directory</span>
</div>

With FTP and FileZilla it is possible to use multiple connections to improve the efficiency of this process, but each connection helps to transfer only one more file per second, it is more scalable, but not much more. Imagine having mul

### Experiment 2 - Transfering 1000 files using SCP.

Here I’m going to use the SCP protocol from a Linux instance hosted on Amazon EC2 to my local machine (using Windows WSL in this case to virtualize an Ubuntu environment).

There are a thousand files to transfer and the command for transferring those is the following:

```bash
time scp -i ec2-instance.pem ubuntu@75.101.208.106:/srv/ftp/dir2/* scp-test/
```

On a high level it tells the following: “Transfer all the files located at dir2 folder within the ftp server folder to my local directory scp-test and then count the time it took to do so”.

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/scp-logs.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/scp-logs.png" alt="SCP Logs" />
    </a>
    <span class="post-img-container__legend">SCP transfer of 1000 files in 2:30 minutes</span>
</div>

As you can see, the above transfer took about 2:30 minutes for only 18MB of files using a 300Mbps network. That’s still a lot of time even though it is better than the result of the first experiment.

For this transfer size and network speed the transfer process should be done in about a second using an efficient protocol but it took a whole two and a half minutes with SCP.

This happens because the files are transferred sequentially, and if one or more file transfers fail you may have to check which files failed and only transfer those to avoid file duplication. Not really convenient in my opinion.


### Experiment 3 - Transferring 1000 files in a second using Rsync

A thousand files in a second? The previous samples took minutes, how would that be possible?

That’s what I thought some time ago when I first tried that out, but it turns out it is true. And even better, as Rsync is a CLI tool it can be used within programming scripts helping automate backups a lot when combined with cron jobs.

<div class="post-img-container">
    <a href="/modules/blog/assets/rsync-1/rsync-cmds.png" target="_blank">
        <img class="post-img-container__img" src="/modules/blog/assets/rsync-1/rsync-cmds.png" alt="Rsync commands to transfer files" />
    </a>
    <span class="post-img-container__legend">Rsync transfer of 1000 files in less than 5 seconds</span>
</div>

So as you can see, Rsync took 2.6 seconds doing the transfer (it actually took about 3.8 seconds the first time I tried so it may slightly vary). That’s a whole lot better, even if we say it took 4 seconds we have a transfer that is about 30 times faster than our second best transfer yet.

Let’s imagine for a second that it was multiple thousands to a million of files (that’s possible to get for some organization with lots and lots of files and projects), the saving potential would likely be a whole lot better, and not only that, but the reliability is way better, it is possible to automate retries and so on because of the CLI nature of Rsync as it can be called from Bash or any programming language that can connect to a Linux-like shell.

## Conclusions

* Rsync is a reliable solution for transferring files at lightning-fast speed, and best of all, it is free and open source (its source code is available here: [https://github.com/RsyncProject/rsync](https://github.com/RsyncProject/rsync))

* There are multiple options for transferring files between machines, I only showed the most common ones here but still, choosing the correct option for the task in hand is crucial, especially at medium-large scale. The time and resources savings can be really good.

* Knowing about multiple possible solutions for a problem that can be solved with tech is valuable as we can find solutions that work great, not just “meh” ones that complete the tasks in a mediocre way using way more resources than necessary.

* CLI tools can be really flexible and it is possible to integrate them using programming languages through multiple methods, one of them would be running a script locally within the same machine, others would involve remote connections to execute the script from another machine.

_**Author:** Daniel Ochoa Montes_