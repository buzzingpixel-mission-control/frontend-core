import { Command, Flags } from '@oclif/core';
import { execSync } from 'node:child_process';
import * as fs from 'fs-extra';
import chalk from 'chalk';

export default class Build extends Command {
    public static summary = 'Build Docker images';

    public static images = [
        'frontend-core',
    ];

    public static flags = {
        images: Flags.string({
            char: 'i',
            multiple: true,
            options: Build.images,
            default: Build.images,
        }),
    };

    public async run (): Promise<void> {
        const rootDir = fs.realpathSync(`${this.config.root}/../`);

        const { flags } = await this.parse(Build);

        const images = flags.images as Array<string>;

        images.forEach((image) => {
            this.log(chalk.yellow(
                `Building buzzingpixel/mission-control-${image}`,
            ));

            execSync(
                `
                    cd ${rootDir};
                    docker build \\
                        --build-arg BUILDKIT_INLINE_CACHE=1 \\
                        --cache-from buzzingpixel/mission-control-${image} \\
                        --tag buzzingpixel/mission-control-${image} \\
                        --file ${rootDir}/docker/${image}/Dockerfile \\
                        ${rootDir};
                `,
                { stdio: 'inherit' },
            );

            this.log(chalk.green(
                `Finished building buzzingpixel/mission-control-${image}`,
            ));
        });
    }
}
