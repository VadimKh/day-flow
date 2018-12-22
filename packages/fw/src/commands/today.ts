import {Command, flags} from '@oclif/command'

export default class Today extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    await this.config.runHook('fw_pre_today', {id: 'fw_pre_today', argv: ['fw']})
    await this.config.runHook('fw_today', {id: 'fw_today', argv: ['fw']})
    await this.config.runHook('fw_post_today', {id: 'fw_post_today', argv: ['fw']})
  }
}
