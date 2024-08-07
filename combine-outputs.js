const fs = require('fs-extra');
const path = require('path');

const microfront1Dist = path.join(__dirname, 'microfront-1/dist');
const microfront2Dist = path.join(__dirname, 'microfront-2/dist');
const combinedDist = path.join(__dirname, 'combined-dist');

// Limpia el directorio combinado
fs.emptyDirSync(combinedDist);

// Copia los archivos de microfront-1
fs.copySync(microfront1Dist, combinedDist);

// Copia los archivos de microfront-2
fs.copySync(microfront2Dist, combinedDist);
