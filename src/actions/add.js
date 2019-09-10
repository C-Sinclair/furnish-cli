import git from 'simple-git'
import fs from 'fs'
import { constructionRepoPath } from './files'

export const addFileToFurnish = async file => {
	console.log(`Construction site in use`)
	const repoPath = constructionRepoPath()
	// check local repo has commits etc
	await fs.copyFile(file, `${repoPath}/`, error => console.error(error))
	try {
		await git(repoPath)
			.add(file)
			.commit(`${file} updated`)
			.push('origin', 'master')
		return true
	} catch (err) {
		console.error(err)
	} finally {
		console.log(`${file} successfully saved to your warehouse`)
	}
}
