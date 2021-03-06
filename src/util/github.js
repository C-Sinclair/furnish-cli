import Store from 'configstore'
import octo from '@octokit/rest'
import extend from 'lodash/extend'
import { askLoginCreds } from '../questions/login'

const store = new Store('furnish')

export const octokit = () => octo

export const getToken = () => store.get('github.token')

export const setCredentials = async () => {
	const creds = await askLoginCreds()
	octo.authenticate(extend({ type: 'basic' }, creds))
}

export const registerToken = async () => {
	// const status = new CLI.Spinner('Authenticating, please wait... ')
	// status.start()
	try {
		const response = await octo.authorization.create({
			scopes: ['user', 'public_repo', 'repo', 'repo:status'],
			note: 'Furnish, smooth conf management'
		})
		const token = response.data.token
		if (token) {
			store.set('github.token', token)
			return token
		} else {
			throw new Error('Missing token', 'No token was returned from Github')
		}
	} catch (error) {
		throw error
	} finally {
		// status.stop()
	}
}
