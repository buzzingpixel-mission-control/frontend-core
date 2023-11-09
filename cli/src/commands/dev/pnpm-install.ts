import { Command } from '@oclif/core';
import { execSync } from 'node:child_process';
import * as fs from 'fs-extra';

export default class PnpmInstall extends Command {
    // eslint-disable-next-line class-methods-use-this
    public async run (): Promise<void> {
        const rootDir = fs.realpathSync(`${this.config.root}/../`);

        execSync(`
            cd ${rootDir};
            pnpm install;
        `, { stdio: 'inherit' });
    }
}
