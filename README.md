Last login: Thu Jun 23 18:33:04 on ttys000
Michelles-MacBook:~ MichelleJLi$ ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures	git_tutorial
Michelles-MacBook:~ MichelleJLi$ pwd
/Users/MichelleJLi
Michelles-MacBook:~ MichelleJLi$ cd hello.rb
-bash: cd: hello.rb: No such file or directory
Michelles-MacBook:~ MichelleJLi$ cd ~/git_tutorial/work
Michelles-MacBook:work MichelleJLi$ ls
hello
Michelles-MacBook:work MichelleJLi$ cd hello.rb
-bash: cd: hello.rb: No such file or directory
Michelles-MacBook:work MichelleJLi$ cd hello
Michelles-MacBook:hello MichelleJLi$ ls
hello.rb
Michelles-MacBook:hello MichelleJLi$ pwd
/Users/MichelleJLi/git_tutorial/work/hello
Michelles-MacBook:hello MichelleJLi$ git st
git: 'st' is not a git command. See 'git --help'.

Did you mean one of these?
	status
	reset
	s
	stage
	stash
	svn
Michelles-MacBook:hello MichelleJLi$ cd ~/users/MichelleJLi
-bash: cd: /Users/MichelleJLi/users/MichelleJLi: No such file or directory
Michelles-MacBook:hello MichelleJLi$ cd /Users/MichelleJLi
Michelles-MacBook:~ MichelleJLi$ ls
Applications	Documents	Library		Music		Public
Desktop		Downloads	Movies		Pictures	git_tutorial
Michelles-MacBook:~ MichelleJLi$ pwd
/Users/MichelleJLi
Michelles-MacBook:~ MichelleJLi$ open -a TextEdit/Users/MichelleJLi/.gitconfig
Unable to find application named 'TextEdit/Users/MichelleJLi/.gitconfig'
Michelles-MacBook:~ MichelleJLi$ ls-a
-bash: ls-a: command not found
Michelles-MacBook:~ MichelleJLi$ ls -a
.			.gitconfig		Library
..			.gitconfig.rtf		Movies
.CFUserTextEncoding	.viminfo		Music
.DS_Store		Applications		Pictures
.Trash			Desktop			Public
.bash_history		Documents		git_tutorial
.bash_sessions		Downloads
Michelles-MacBook:~ MichelleJLi$ rm .gitconfig.rtf
Michelles-MacBook:~ MichelleJLi$ ls -a
.			.gitconfig		Movies
..			.viminfo		Music
.CFUserTextEncoding	Applications		Pictures
.DS_Store		Desktop			Public
.Trash			Documents		git_tutorial
.bash_history		Downloads
.bash_sessions		Library
Michelles-MacBook:~ MichelleJLi$ git st
git: 'st' is not a git command. See 'git --help'.

Did you mean one of these?
	status
	reset
	s
	stage
	stash
	svn
Michelles-MacBook:~ MichelleJLi$ emax .gitconfig
-bash: emax: command not found
Michelles-MacBook:~ MichelleJLi$ emacs .gitconfig
Michelles-MacBook:~ MichelleJLi$ git st
fatal: Not a git repository (or any of the parent directories): .git
Michelles-MacBook:~ MichelleJLi$ pwd
/Users/MichelleJLi
Michelles-MacBook:~ MichelleJLi$ cd hello
-bash: cd: hello: No such file or directory
Michelles-MacBook:~ MichelleJLi$ cd ~/git_tutorial/work
Michelles-MacBook:work MichelleJLi$ pwd
/Users/MichelleJLi/git_tutorial/work
Michelles-MacBook:work MichelleJLi$ ls
hello
Michelles-MacBook:work MichelleJLi$ cd hello
Michelles-MacBook:hello MichelleJLi$ ls
hello.rb
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
nothing to commit, working directory clean
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
nothing to commit, working directory clean
Michelles-MacBook:hello MichelleJLi$ git hist
* 2123a0c 2016-06-23 | Added a comment (HEAD -> master) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git checkout 93318a4
Note: checking out '93318a4'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 93318a4... First Commit
Michelles-MacBook:hello MichelleJLi$ cat hello.rb
puts "Hello, World"Michelles-MacBook:hello MichelleJLi$ git checkout master
Previous HEAD position was 93318a4... First Commit
Switched to branch 'master'
Michelles-MacBook:hello MichelleJLi$ cat hello.rb
# Default is "World"
name = ARGV.first || "World"
puts "Hello, #{ARGV.first}!"Michelles-MacBook:hello MichelleJLi$ git tag v1
Michelles-MacBook:hello MichelleJLi$ git checkout v1^
Note: checking out 'v1^'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 1d748f5... Added a default value
Michelles-MacBook:hello MichelleJLi$ cat hello.rb
name = ARGV.first || "World"
puts "Hello, #{ARGV.first}!"Michelles-MacBook:hello MichelleJLi$ git tag v1-beta
Michelles-MacBook:hello MichelleJLi$ git checkout v1
Previous HEAD position was 1d748f5... Added a default value
HEAD is now at 2123a0c... Added a comment
Michelles-MacBook:hello MichelleJLi$ git checkout v1-beta
Previous HEAD position was 2123a0c... Added a comment
HEAD is now at 1d748f5... Added a default value
Michelles-MacBook:hello MichelleJLi$ git tag
v1
v1-beta
Michelles-MacBook:hello MichelleJLi$ git hist master --all
* 2123a0c 2016-06-23 | Added a comment (tag: v1, master) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (HEAD, tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git checkout master
Previous HEAD position was 1d748f5... Added a default value
Switched to branch 'master'
Michelles-MacBook:hello MichelleJLi$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   hello.rb

no changes added to commit (use "git add" and/or "git commit -a")
Michelles-MacBook:hello MichelleJLi$ git checkout hello.rb
Michelles-MacBook:hello MichelleJLi$ git status
On branch master
nothing to commit, working directory clean
Michelles-MacBook:hello MichelleJLi$ cat hello.rb
# Default is "World"
name = ARGV.first || "World"
puts "Hello, #{ARGV.first}!"Michelles-MacBook:hello MichelleJLi$ git add hello.rb
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   hello.rb

Michelles-MacBook:hello MichelleJLi$ git reset HEAD hello.rb
Unstaged changes after reset:
M	hello.rb
Michelles-MacBook:hello MichelleJLi$ git checkout hello.rb
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
nothing to commit, working directory clean
Michelles-MacBook:hello MichelleJLi$ git add hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit -m"Oops, we didn't want this commit"
[master d1bbbea] Oops, we didn't want this commit
 1 file changed, 3 insertions(+), 2 deletions(-)
Michelles-MacBook:hello MichelleJLi$ git revert HEAD

[No write since last change]

Press ENTER or type command to continue
error: There was a problem with the editor 'vi'.
Please supply the message using either -m or -F option.
Michelles-MacBook:hello MichelleJLi$ git hist
* d1bbbea 2016-06-23 | Oops, we didn't want this commit (HEAD -> master) [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   hello.rb

Michelles-MacBook:hello MichelleJLi$ git reset HEAD hello.rb
Unstaged changes after reset:
M	hello.rb
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   hello.rb

no changes added to commit (use "git add" and/or "git commit -a")
Michelles-MacBook:hello MichelleJLi$ git checkout hello.rb
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
nothing to commit, working directory clean
Michelles-MacBook:hello MichelleJLi$ cat hello.rb
# This is an unwanted but committed change
name = ARGV.first || "World"

puts "Hello, #{name}!"Michelles-MacBook:hello MichelleJLi$ git hist
* d1bbbea 2016-06-23 | Oops, we didn't want this commit (HEAD -> master) [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git revert HEAD
error: There was a problem with the editor 'vi'.
Please supply the message using either -m or -F option.
Michelles-MacBook:hello MichelleJLi$ git st
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   hello.rb

Michelles-MacBook:hello MichelleJLi$ git hist
* d1bbbea 2016-06-23 | Oops, we didn't want this commit (HEAD -> master) [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git tag oops
Michelles-MacBook:hello MichelleJLi$ git reset --hard v1
HEAD is now at 2123a0c Added a comment
Michelles-MacBook:hello MichelleJLi$ git hit
git: 'hit' is not a git command. See 'git --help'.

Did you mean this?
	hist
Michelles-MacBook:hello MichelleJLi$ git hist
* 2123a0c 2016-06-23 | Added a comment (HEAD -> master, tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git tag -d oops 
Deleted tag 'oops' (was d1bbbea)
Michelles-MacBook:hello MichelleJLi$ git hist --all
* 2123a0c 2016-06-23 | Added a comment (HEAD -> master, tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git add hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit -m "Add an author comment"
[master d87bc35] Add an author comment
 1 file changed, 4 insertions(+), 2 deletions(-)
Michelles-MacBook:hello MichelleJLi$ git add hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit --amend -m "Add an author/email comment"
[master f992331] Add an author/email comment
 Date: Thu Jun 23 20:48:46 2016 -0700
 1 file changed, 4 insertions(+), 2 deletions(-)
Michelles-MacBook:hello MichelleJLi$ git hist
* f992331 2016-06-23 | Add an author/email comment (HEAD -> master) [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ mkdir lib
Michelles-MacBook:hello MichelleJLi$ git mv hello.rb lib
Michelles-MacBook:hello MichelleJLi$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	renamed:    hello.rb -> lib/hello.rb

Michelles-MacBook:hello MichelleJLi$ git commit -m "Moved hello.rb to lib"
[master 63e87c7] Moved hello.rb to lib
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename hello.rb => lib/hello.rb (100%)
Michelles-MacBook:hello MichelleJLi$ gem install rake
Fetching: rake-11.2.2.gem (100%)
Successfully installed rake-11.2.2
Parsing documentation for rake-11.2.2
Installing ri documentation for rake-11.2.2
Done installing documentation for rake after 1 seconds
1 gem installed
Michelles-MacBook:hello MichelleJLi$ emacs Rakefile
Michelles-MacBook:hello MichelleJLi$ ls -a
.		.git		Rakefile~
..		Rakefile	lib
Michelles-MacBook:hello MichelleJLi$ git add Rakefile
Michelles-MacBook:hello MichelleJLi$ git commit -m "Added a Rakefile."
[master bced233] Added a Rakefile.
 1 file changed, 8 insertions(+)
 create mode 100644 Rakefile
Michelles-MacBook:hello MichelleJLi$ rake
Hello, World!
Michelles-MacBook:hello MichelleJLi$ ls -C .git
COMMIT_EDITMSG	branches	hooks		logs
HEAD		config		index		objects
ORIG_HEAD	description	info		refs
Michelles-MacBook:hello MichelleJLi$ ls -C.git/objects
ls: illegal option -- .
usage: ls [-ABCFGHLOPRSTUWabcdefghiklmnopqrstuwx1] [file ...]
Michelles-MacBook:hello MichelleJLi$ ls -C .git/objects
14	3e	4a	63	93	ad	bc	d8	f9	pack
1d	42	52	79	99	b6	d1	db	fb
21	46	5f	90	9d	bb	d7	f2	info
Michelles-MacBook:hello MichelleJLi$ ls -C .git/objects/14
5594ac11820f29bc9d1355184a3dcb7ac8d0bb
Michelles-MacBook:hello MichelleJLi$ cat .git/config
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
Michelles-MacBook:hello MichelleJLi$ id
uid=501(MichelleJLi) gid=20(staff) groups=20(staff),701(com.apple.sharepoint.group.1),12(everyone),61(localaccounts),79(_appserverusr),80(admin),81(_appserveradm),98(_lpadmin),33(_appstore),100(_lpoperator),204(_developer),395(com.apple.access_ftp),398(com.apple.access_screensharing),399(com.apple.access_ssh)
Michelles-MacBook:hello MichelleJLi$ git config --global user.email
jing.m.li0607@gmail.com
Michelles-MacBook:hello MichelleJLi$ ls .git/refs
heads	tags
Michelles-MacBook:hello MichelleJLi$ ls .git/refs/heads
master
Michelles-MacBook:hello MichelleJLi$ ls .git/refs/tags
v1	v1-beta
Michelles-MacBook:hello MichelleJLi$ cat .git/refs/tags/v1
2123a0cdf6f9487a7f6d0d429220b43cc7bbaa73
Michelles-MacBook:hello MichelleJLi$ cat .git/HEAD
ref: refs/heads/master
Michelles-MacBook:hello MichelleJLi$ git hist --max-count=1
* bced233 2016-06-23 | Added a Rakefile. (HEAD -> master) [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git cat-file -t bced233
commit
Michelles-MacBook:hello MichelleJLi$ git cat-file -p bced233
tree 4291758176cba26b8685555c0dfdc831d3924e17
parent 63e87c7df1ab30d16838bb502d2b54456b07152b
author Jing Michelle Li <jing.m.li0607@gmail.com> 1466741597 -0700
committer Jing Michelle Li <jing.m.li0607@gmail.com> 1466741597 -0700

Added a Rakefile.
Michelles-MacBook:hello MichelleJLi$ git cat-file -p 4291758
100644 blob f21f041d8674f589298d160e0a1b55e01a3d4247	Rakefile
040000 tree 999900df9f6375fe3e7c27ac2294007cb34c38b6	lib
Michelles-MacBook:hello MichelleJLi$ git cat-file -p 999900d
100644 blob 4a6330f8d785e29eba478f743479cad513904af7	hello.rb
Michelles-MacBook:hello MichelleJLi$ git cat-file -p4a6330f
error: unknown switch `4'
usage: git cat-file (-t [--allow-unknown-type]|-s [--allow-unknown-type]|-e|-p|<type>|--textconv) <object>
   or: git cat-file (--batch | --batch-check) [--follow-symlinks]

<type> can be one of: blob, tree, commit, tag
    -t                    show object type
    -s                    show object size
    -e                    exit with zero when there's no error
    -p                    pretty-print object's content
    --textconv            for blob objects, run textconv on object's content
    --allow-unknown-type  allow -s and -t to work with broken/corrupt objects
    --buffer              buffer --batch output
    --batch[=<format>]    show info and content of objects fed from the standard input
    --batch-check[=<format>]
                          show info about objects fed from the standard input
    --follow-symlinks     follow in-tree symlinks (used with --batch or --batch-check)
    --batch-all-objects   show all objects with --batch or --batch-check

Michelles-MacBook:hello MichelleJLi$ git cat-file -p 466033f
fatal: Not a valid object name 466033f
Michelles-MacBook:hello MichelleJLi$ git cat-file -p 4a6330f
# Default is World
# Author: Jim Weirich (jim@somewhere.com)
name = ARGV.first || "World"

puts "Hello, #{name}!"Michelles-MacBook:hello MichelleJLi$ 
Michelles-MacBook:hello MichelleJLi$ git checkout -b greet
Switched to a new branch 'greet'
Michelles-MacBook:hello MichelleJLi$ git status
On branch greet
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	Rakefile~

nothing added to commit but untracked files present (use "git add" to track)
Michelles-MacBook:hello MichelleJLi$ emacs
Michelles-MacBook:hello MichelleJLi$ git add lib/greeter.rb
fatal: pathspec 'lib/greeter.rb' did not match any files
Michelles-MacBook:hello MichelleJLi$ git add lib/greeter.rb
Michelles-MacBook:hello MichelleJLi$ git commit - "Added greeter class"
error: pathspec '-' did not match any file(s) known to git.
error: pathspec 'Added greeter class' did not match any file(s) known to git.
Michelles-MacBook:hello MichelleJLi$ git commit -m "Added greeter class"
[greet fe4c874] Added greeter class
 1 file changed, 8 insertions(+)
 create mode 100644 lib/greeter.rb
Michelles-MacBook:hello MichelleJLi$ git add lib/hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit -m "Hello uses Greeter"
On branch greet
Untracked files:
	Rakefile~
	greeter.rb
	hello.rb

nothing added to commit but untracked files present
Michelles-MacBook:hello MichelleJLi$ git add Rakefile
Michelles-MacBook:hello MichelleJLi$ git commit -m "Updated Rakefile"
On branch greet
Untracked files:
	Rakefile~
	greeter.rb
	hello.rb

nothing added to commit but untracked files present
Michelles-MacBook:hello MichelleJLi$ git hist --all
* fe4c874 2016-06-23 | Added greeter class (HEAD -> greet) [Jing Michelle Li]
* bced233 2016-06-23 | Added a Rakefile. (master) [Jing Michelle Li]
* 63e87c7 2016-06-23 | Moved hello.rb to lib [Jing Michelle Li]
* f992331 2016-06-23 | Add an author/email comment [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git add lib/hello.rb
Michelles-MacBook:hello MichelleJLi$ git add lib/hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit -m "Hello uses Greeter"
On branch greet
Untracked files:
	Rakefile~
	hello.rb

nothing added to commit but untracked files present
Michelles-MacBook:hello MichelleJLi$ git hist --all
* fe4c874 2016-06-23 | Added greeter class (HEAD -> greet) [Jing Michelle Li]
* bced233 2016-06-23 | Added a Rakefile. (master) [Jing Michelle Li]
* 63e87c7 2016-06-23 | Moved hello.rb to lib [Jing Michelle Li]
* f992331 2016-06-23 | Add an author/email comment [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git add lib/hello.rb
Michelles-MacBook:hello MichelleJLi$ git commit -m "Hello uses Greeter"
[greet 43b007b] Hello uses Greeter
 1 file changed, 4 insertions(+), 2 deletions(-)
Michelles-MacBook:hello MichelleJLi$ git add Rakefile
Michelles-MacBook:hello MichelleJLi$ git commit -m "Updated Rakefile"
[greet b846be1] Updated Rakefile
 1 file changed, 1 insertion(+), 1 deletion(-)
Michelles-MacBook:hello MichelleJLi$ git hist --all
* b846be1 2016-06-23 | Updated Rakefile (HEAD -> greet) [Jing Michelle Li]
* 43b007b 2016-06-23 | Hello uses Greeter [Jing Michelle Li]
* fe4c874 2016-06-23 | Added greeter class [Jing Michelle Li]
* bced233 2016-06-23 | Added a Rakefile. (master) [Jing Michelle Li]
* 63e87c7 2016-06-23 | Moved hello.rb to lib [Jing Michelle Li]
* f992331 2016-06-23 | Add an author/email comment [Jing Michelle Li]
* 2123a0c 2016-06-23 | Added a comment (tag: v1) [Jing Michelle Li]
* 1d748f5 2016-06-23 | Added a default value (tag: v1-beta) [Jing Michelle Li]
* b608012 2016-06-23 | Using ARGV [Jing Michelle Li]
* 93318a4 2016-06-23 | First Commit [Jing Michelle Li]
Michelles-MacBook:hello MichelleJLi$ git checkout master
Switched to branch 'master'
Michelles-MacBook:hello MichelleJLi$ cat lib/hello.rb
# Default is World
# Author: Jim Weirich (jim@somewhere.com)
name = ARGV.first || "World"

puts "Hello, #{name}!"Michelles-MacBook:hello MichelleJLi$ git checkout greet
Switched to branch 'greet'
Michelles-MacBook:hello MichelleJLi$ cat lib/hello.rb
require 'greeter'

# Default is World
name = ARGV.first || "World"

greeter = Greeter.new(name)
puts greeter.greetMichelles-MacBook:hello MichelleJLi$ git checkout master
Switched to branch 'master'
Michelles-MacBook:hello MichelleJLi$ emacs README

This is the Hello World example from the git tutorial





















-uuu:**-F1  README         All L2     (Fundamental)-----------------------------

