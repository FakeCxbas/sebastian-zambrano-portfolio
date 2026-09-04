// Run manually with the local sharp package path as argv[2].
// Original screenshots remain outside the deployable directory.
const sharp = require(process.argv[2]);
const path = require('node:path');
const out = path.resolve(__dirname, '../public/projects');
const temp = 'C:/Users/WinterOS/AppData/Local/Temp';
const conceal = (width,height,color) => Buffer.from(`<svg width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/></svg>`);
async function main() {
  await sharp(path.join(temp,'codex-clipboard-79c75bc4-d5ad-49d8-ba14-24b36e758056.png'))
    .extract({left:256,top:145,width:1328,height:615}).png().toFile(path.join(out,'contanova-dashboard.png'));
  await sharp(path.join(temp,'codex-clipboard-b52694d2-d82f-4331-8250-fe1e3fd9a6ed.png'))
    .extract({left:0,top:23,width:1600,height:535})
    .composite([{input:conceal(970,77,'#ffffff'),left:375,top:145}])
    .png().toFile(path.join(out,'jeldes-dashboard.png'));
  await sharp(path.join(temp,'codex-clipboard-4213ddad-7bf7-4537-ae20-e311216a696e.png'))
    .extract({left:0,top:88,width:1584,height:792})
    .composite([{input:conceal(250,44,'#f7f7f9'),left:1200,top:10}])
    .png().toFile(path.join(out,'smartdocs-dashboard.png'));
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
