const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Elimina el directorio de salida si existe
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

// Crear el directorio de salida
fs.mkdirSync(distDir);

// Copia el contenido de los directorios de los microfrontends
['microfront-1/dist', 'microfront-2/dist'].forEach((sourceDir) => {
  fs.cpSync(sourceDir, distDir, { recursive: true });
});

console.log('Microfrontends combinados correctamente en el directorio dist');
