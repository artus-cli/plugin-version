import { DefineCommand, Command } from '@artus-cli/artus-cli';

@DefineCommand({
  command: 'dev',
})
export class DevCommand extends Command {
  async run() {
    console.info('dev');
  }
}
