import {Command, flags} from '@oclif/command'
import * as Configstore from 'configstore'

const store = new Configstore('fw')

export default class Init extends Command {
  static description = 'Init is used to initialized app and all your plugins'

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    this.log('Start to initialize you app:')
    await this.config.runHook('init_app', {id: 'init', argv: ['fw']})
    this.log(`May the force be with you, ${store.get('name')}`)
  }
}
