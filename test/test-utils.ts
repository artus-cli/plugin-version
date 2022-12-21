import path from 'path';
import coffee from 'coffee';
import { ForkOptions } from 'child_process';

export function run(args: string | string[], options: ForkOptions = {}) {
  const bin = path.join(__dirname, '../src/bin/cli.ts');
  const cwd = path.join(__dirname, 'fixtures');
  if (typeof args === 'string') args = args.split(' ');
  return coffee.fork(bin, args, {
    cwd,
    execArgv: [ '-r', 'ts-node/register' ].concat(options.execArgv || []),
    ...options,
  });
}
