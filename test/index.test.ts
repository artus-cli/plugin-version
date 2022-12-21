import { run } from './test-utils';

describe('test/index.test.ts', () => {
  it('should --help', async () => {
    await run('--help')
      // .debug()
      .expect('stdout', /Available Commands/)
      .end();
  });
});
