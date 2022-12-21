import path from 'path';
import coffee from 'coffee';
import { ForkOptions } from 'child_process';

export function run(binName: string, args: string | string[], options: ForkOptions = {}) {
  const bin = path.resolve(__dirname, './fixtures', binName, 'bin/cli.ts');
  if (typeof args === 'string') args = args.split(' ');
  return coffee.fork(bin, args, {
    execArgv: [ '-r', 'ts-node/register' ].concat(options.execArgv || []),
    ...options,
  });
}
