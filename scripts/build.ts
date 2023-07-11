import archiver from 'archiver';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

const name = 'erp-keycloak-theme'
const dir = 'out';
const file = `${name}.jar`;
const path = `${dir}/${file}`;

!existsSync(dir) && mkdirSync(dir);

const output = createWriteStream(`${__dirname}/../${path}`);

const archive = archiver('zip');

archive.on('error', (error) => {
  throw error;
});
output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('Output generated: ' + path);
});

archive.pipe(output);

archive.directory('META-INF', 'META-INF');
archive.directory('theme/keywind', 'theme/erp');

archive.finalize();
