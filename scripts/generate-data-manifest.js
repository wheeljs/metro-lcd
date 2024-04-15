const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

const DataDir = path.resolve('./src/assets/dashboard-data');

async function generateDataManifest() {
  const dataFiles = (await fs.readdir(DataDir))
    .filter(x => x.endsWith('.json'));
  const pendings = dataFiles.map(x => {
    const filePath = path.resolve(DataDir, x);
    return fs.readFile(filePath)
      .then((fileContent) => ({
        id: path.basename(x, '.json'),
        hash: crypto.createHash('md5').update(fileContent).digest('hex'),
        url: `assets/${x}`,
      }));
  });

  const manifest = await Promise.all(pendings);
  manifest.sort((a, b) => {
    let [aYear, aMonth] = a.id.split('-');
    let [bYear, bMonth] = b.id.split('-');
    [aYear, aMonth, bYear, bMonth] = [aYear, aMonth, bYear, bMonth].map(x => Number.parseInt(x));
    if (aYear !== bYear) {
      return bYear - aYear;
    }
    return bMonth - aMonth;
  });
  return fs.writeFile(
    path.resolve(DataDir, '../', 'dashboard-manifest.json'),
    JSON.stringify(manifest),
  );
}

generateDataManifest();
