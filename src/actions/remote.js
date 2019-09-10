import { octokit as github } from '../util/github'

export const createRepo = async () => {
	const { name, description, visibility } = await askRepoDetails()
	const data = {
		name,
		description,
		private: visibility === 'private'
	}
	console.log('Creating remote repository...')
	try {
		const response = await github.repos.create(data)
		return response.data.ssh_url
	} catch (error) {
		throw error
	} finally {
		console.log(`${name} created`)
	}
}
