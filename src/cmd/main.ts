import { DefineCommand, Command, Option, DefineOption } from '@artus-cli/artus-cli';

interface MainOption extends Option {
  params?: string[];
}

@DefineCommand({
  command: '$0 [params...]',
})
export class MainCommand extends Command {
  @DefineOption<MainOption>()
  args: MainOption;

  async run() {
    console.info('main', this.args.params.join(','));
  }
}
