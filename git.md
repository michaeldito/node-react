# Git

## Initialize a git repository
`git init`

## Check the status of your repository
`git status`

## Begin tracking a file
`git add <filename>`

## Do not track certain files
`touch .gitignore`
Add file/folder to .gitignore

## Commit changes to repository
`git commit -m '<comment>'`

## Generate ssh key
`ssh-keygen -t rsa -b 4096 -C '<your email>'`

## Start the ssh agent
`eval "$(ssh-agent -s)"`

## Add your private key to the ssh agent
`ssh-add ~/.ssh/<private key>`

## Add ssh key to github
Github
Settings
SSH and GPG keys
`pbcopy < ~/.ssh/<public key>`
Paste in github

## Remote add
Let's git know which 3rd party urls you want to sync up with
`git remote add origin git@github.com:michaelcdito/pathtorepo.git`