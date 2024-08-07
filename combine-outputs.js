const fs = require('fs-extra');
const path = require('path');

// Directorios de salida de cada microfrontend
const microfront1Dist = path.join(__dirname, 'microfront-1/dist');
const microfront2Dist = path.join(__dirname, 'microfront-2/dist');
// Directorio combinado donde se copiarán los archivos
const combinedDist = path.join(__dirname, 'dist');

// Limpia el directorio combinado si existe
fs.emptyDirSync(combinedDist);

// Copia los archivos de microfront-1 al directorio combinado
fs.copySync(microfront1Dist, combinedDist, { overwrite: true });

// Copia los archivos de microfront-2 al directorio combinado
fs.copySync(microfront2Dist, combinedDist, { overwrite: true });

// Asegúrate de que los archivos no se sobrescriban de forma no deseada
console.log('Archivos combinados en', combinedDist);
