<h1 id="title">Rsync, a faster backup option</h1>

<img id="featured-img" src="/modules/blog/assets/backup-rsync.webp" alt="backup with rsync" />

Have you ever tried to move files between two computers and you only got GUI options based on FTP (File Transfer Protocol) and the old-reliable SCP option?

Well, sometimes you have a great UI option and that's enough to met your needs, _but sometimes that's not enough_ as you may want to do something custom, automate something using a script and still have reliability and performance at the same time.

FTP and its secure version SFTP are really useful file transfer protocols and most hosting providers offer them as a way to access and modify files, they can also be useful to make backups depending on the situation using an FTP client like [Filezilla](https://filezilla-project.org/) and if that's enough, good for you!

But sometimes, using FTP or SCP is not fast or reliable enough for your needs as both of these protocols don't guarantee that everything you transfered was transfered succesfully and tend to be relatively slow, transfering just a single file at a time.

But _worry not, Rsync is here to help!_ it can transfer multiple files parallelly, show progress, be reliable and do it fast! If a transfer fails for any reason you don't have to start it all over again or check which files you transfer and which files you already have, Rsync does that for you automagically.

-- PENDING: FTP IMG goes using Filezilla goes here --

## The problems of the simplest options

### The problems of FTP (and SFTP)



-- 
    PENDING: Complete this section

    1. Show a failed or duplicated transfer with FTP (show the FileZilla warnings)
--

### The problems of SCP

-- PENDING: Complete this section --


## Rsync, a great alternative

-- 

PENDING: 

2. Show a duplicated transfer using SCP and/or the time it takes to transfer about 500MB of files using a good network.

--

## Other alternatives

-- 

PENDING: 

3. List some FOSS and paid alternatives that can do similar things.

--

## Conclusion

--

4. Outline the advantages of Rsync over simpler solutions and more advanced, paid ones.

5. Give advice on when to use each option.

--