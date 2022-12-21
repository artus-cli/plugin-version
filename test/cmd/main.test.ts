import { run } from '../test-utils';

describe('test/main.test.ts', () => {
  it('should fallback', async () => {
    await run('a b c')
      // .debug()
      .expect('stdout', /main a,b,c/)
      .end();
  });
});
