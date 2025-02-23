/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { checksum } from 'vs/base/node/crypto';
import { join } from 'vs/base/common/path';
import { tmpdir } from 'os';
import { mkdirp, rimraf, writeFile } from 'vs/base/node/pfs';
import { getRandomTestPath } from 'vs/base/test/node/testUtils';

suite('Crypto', () => {

	test('checksum', async () => {
		const testDir = getRandomTestPath(tmpdir(), 'vsctests', 'crypto');
		await mkdirp(testDir);

		const testFile = join(testDir, 'checksum.txt');
		await writeFile(testFile, 'Hello World');

		await checksum(testFile, '0a4d55a8d778e5022fab701977c5d840bbc486d0');

		await rimraf(testDir);
	});
});
