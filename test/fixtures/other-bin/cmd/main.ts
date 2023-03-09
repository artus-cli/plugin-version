import { DefineCommand, Command } from '@artus-cli/artus-cli';

@DefineCommand({
  command: '$0 <url>',
})
export class MainCommand extends Command {
  async run() {
    console.info('main');
  }
}
