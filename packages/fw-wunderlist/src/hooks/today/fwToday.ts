import {Hook} from '@oclif/config'
import {get} from '../../utils/api'
//tslint:disable no-console

const hook: Hook<'fw-today'> = async function (opts) {
  process.stdout.write(`example hook running`, opts)
  try {
    console.log(await get('/lists'))
  } catch (e) {
    console.log('SUPER TEST', e)
  }
}

export default hook
