import { run } from '../test-utils';

describe('test/debug.test.ts', () => {
  it('debug', async () => {
    await run('debug --port=80 --flags=1')
      // .debug()
      .expect('stdout', /inspect true/)
      .expect('stdout', /port 80/)
      .expect('stdout', /flags 1 number/)
      .end();
  });

  it('inspect alias', async () => {
    await run('inspect')
      // .debug()
      .expect('stdout', /inspect true/)
      .expect('stdout', /flags 0 number/)
      .end();
  });
});
