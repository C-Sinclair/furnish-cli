# Furnish

A CLI tool to _furnish_ your project with personalised config!

### Features

- Download saved config files into any directory
- Save config files to your repo for future downloading
- Automatically update `.gitignore`

### API

Running `furnish` will use the currently logged in GitHub user and pull from their `.configwarehouse` repository and pull their default config files into the current working directory.

### Config Repository

Furnish will create a repository to house your personal

### Config Showroom

Online catalogue of config files which can be used by Furnish

### Naming nightmares!

Dotphile

.tree
.archive
.Attic
.Vault

```shell

furnish
    -f [file?]
    -b [branch?]

furnish save [path?]
    -b [branch?]
    -f [file?]

furnish showroom [file!]

```
