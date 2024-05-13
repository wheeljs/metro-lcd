const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

const DataDir = path.resolve('./src/assets/dashboard-data');

async function generateDataManifest() {
  const dataFiles = (await fs.readdir(DataDir))
    .filter(x => x.endsWith('.json'))
    .map((filename) => {
      const id = path.basename(filename, '.json');
      const date = new Date(`${id}-01`);
      return {
        id,
        filename,
        date,
      };
    });
  const sortedDataFiles = [...dataFiles].sort((a, b) => b.date.getTime() - a.date.getTime());
  for (let i = 0; i < sortedDataFiles.length; i++) {
    const dataFile = sortedDataFiles[i];
    const prevDataFile = sortedDataFiles[i + 1];
    if (!prevDataFile) {
      break;
    }
    const dateDiff = (dataFile.date.getTime() - prevDataFile.date.getTime()) / 1000 / 60 / 60 / 24;
    if (dateDiff > 31) {
      const missedDate = new Date(dataFile.date);
      missedDate.setMonth(missedDate.getMonth() - 1);
      const missedRange = {
        id: `${missedDate.getFullYear()}-${missedDate.getMonth() + 1}`,
        date: missedDate,
        disabled: true,
      };
      sortedDataFiles.splice(i + 1, 0, missedRange);
    }
  }

  const pendings = sortedDataFiles.map(({ date, filename, ...x }) => {
    if (x.disabled) {
      return x;
    }

    const filePath = path.resolve(DataDir, filename);
    return fs.readFile(filePath)
      .then((fileContent) => ({
        ...x,
        hash: crypto.createHash('md5').update(fileContent).digest('hex'),
      }));
  });

  const manifest = await Promise.all(pendings);
  return fs.writeFile(
    path.resolve(DataDir, '../', 'dashboard-manifest.json'),
    JSON.stringify(manifest),
  );
}

generateDataManifest();
