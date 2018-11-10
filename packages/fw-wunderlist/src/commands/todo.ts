import {Command, flags} from '@oclif/command'

export default class Todo extends Command {
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
    const {args, flags} = this.parse(Todo)

    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/vadimkh/Projects/day-flow/packages/fw-wunderlist/src/commands/todo.ts`)
    this.log('TODOTODOTODOTODTODOTODTODTODOTOTDOTOO')
    if (args.file && flags.force) {
      this.log('TODOTODOTODOTODTODOTODTODTODOTOTDOTOO')
    }
  }
}
