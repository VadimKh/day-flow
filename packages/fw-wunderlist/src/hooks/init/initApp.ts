import {get} from 'axios'
import {Hook} from '@oclif/config'
import * as Configstore from 'configstore'
import {prompt} from 'enquirer'

const store = new Configstore('fw')

// tslint:disable no-console
const hook: Hook<'init_app'> = async function () {
  console.log('Wunderline Init')
  console.log('To authenticate wunderlist you should create an wunderlist app on the following page: https://developer.wunderlist.com/apps')
  const answers = await prompt([{
    type: 'input',
    name: 'clientId',
    message: 'Enter your Client ID:'
  }, {
    type: 'input',
    name: 'accessToken',
    message: 'Enter your Access Token:'
  }])

  try {
    const user = await get('https://a.wunderlist.com/api/v1/user', {
      headers: {
        'X-Access-Token': answers.accessToken,
        'X-Client-ID': answers.clientId
      }
    })
    store.set('wd_access_token', answers.accessToken)
    store.set('wd_client_id', answers.clientId)
    store.set('wd_authenticated_at', new Date())
    store.set('name', user.name)
  } catch (e) {
    console.log(e.message)
  }
}

export default hook
