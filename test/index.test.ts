import { run } from './test-utils';

describe('test/index.test.ts', () => {
  it('should --version', async () => {
    await run('my-bin', '--version')
      // .debug()
      .expect('stdout', /1.0.1/)
      .end();
  });

  it('should -v', async () => {
    await run('my-bin', '-v')
      // .debug()
      .expect('stdout', /1.0.1/)
      .end();
  });

  it('should no show version with subcommand', async () => {
    await run('my-bin', 'dev -v')
      // .debug()
      .expect('stdout', /dev/)
      .end();
  });
});
