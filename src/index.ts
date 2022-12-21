import { Program, CommandContext, Inject, ApplicationLifecycle, LifecycleHook, LifecycleHookUnit } from '@artus-cli/artus-cli';

@LifecycleHookUnit()
export default class VersionLifecycle implements ApplicationLifecycle {
  @Inject()
  private readonly program: Program;

  @LifecycleHook()
  async configDidLoad() {
    const { rootCommand } = this.program;
    this.program.option({
      version: {
        type: 'boolean',
        alias: 'v',
        description: 'Show Version',
      },
    }, [ rootCommand ]);

    // intercept root command and show version
    this.program.useInCommand(rootCommand, async (ctx: CommandContext, next) => {
      const { args } = ctx;
      if (args.version) {
        return console.info(this.program.version);
      }

      await next();
    });
  }
}
