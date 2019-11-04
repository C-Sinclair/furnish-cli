import { octokit as github } from '../util/github'
import git from 'simple-git'
import { constructionRepoPath } from '../util/files'
import { copyFile, readdir, lstat, lstatSync } from 'fs'
import { pwd } from '../util/files'

export const pullFromFurnish = async file => {
	const repoPath = constructionRepoPath()
	syncLocalWithRemote()
	if (file) {
		copyFile(`${repoPath}/${file}`, pwd)
	} else {
	}
}

const syncLocalWithRemote = async () => {
	const repoPath = constructionRepoPath()
	try {
		await git(repoPath).pull()
	} catch (err) {
		console.error(err)
	}
}

const copyRecursively = async file => {
	const repoPath = constructionRepoPath()
	await readdir(repoPath).forEach(file => {
		if (lstatSync(file).isDirectory()) {
		}
	})
}
