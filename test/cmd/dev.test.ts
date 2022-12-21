import { run } from '../test-utils';

describe('test/dev.test.ts', () => {
  it('dev', async () => {
    await run('dev --port=80 --nodeFlags=--experimental-vm-modules')
      // .debug()
      .expect('stdout', /port 80/)
      .expect('stdout', /inspect false boolean/)
      .expect('stdout', /nodeFlags --experimental-vm-module/)
      .end();
  });

  it('dev with baseDir', async () => {
    await run('dev ./src -p=80')
      // .debug()
      .expect('stdout', /port 80/)
      .expect('stdout', /baseDir .\/src/)
      .end();
  });
});
