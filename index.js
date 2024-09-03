// // const puppeteer = require('puppeteer');

// // (async () => {
// //   const browser = await puppeteer.launch({ headless: false });
// //   const page = await browser.newPage();

// //   // Navegar a la página
// //   await page.goto('https://awsrestart.instructure.com/courses/3194/conferences');

// //   // Esperar a que el botón de "Unirse" esté disponible en la página
// //   await page.waitForSelector('button[aria-label="Unirse"]');

// //   // Hacer clic en el botón de "Unirse"
// //   await page.click('button[aria-label="Unirse"]');

// //   // Mantén el navegador abierto por un tiempo para que puedas ver lo que sucede
// // //   await page.waitForTimeout(5000); // Espera 5 segundos

// // //   // Cerrar el navegador
// // //   await browser.close();
// // })();
// // const puppeteer = require('puppeteer');

// // (async () => {
// //   const browser = await puppeteer.launch({
// //     headless: false, 
// //     userDataDir: 'C:\\Users\\Usuario\\AppData\\Local\\Google\\Chrome\\User Data\\Default'
// //   });
  
// //   const page = await browser.newPage();

// //   // Navegar a la página
// //   await page.goto('https://awsrestart.instructure.com/courses/3194/conferences');

// //   // Esperar a que el botón de "Unirse" esté disponible en la página
// //   await page.waitForSelector('button[aria-label="Unirse"]');

// //   // Hacer clic en el botón de "Unirse"
// //   await page.click('button[aria-label="Unirse"]');

// //   // El navegador se mantiene abierto
// // })();


// const puppeteer = require('puppeteer');
// const path = require('path');

// (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', // Ruta al ejecutable de Chrome
//       args: [
//         `--user-data-dir=${path.join('C:', 'Users', 'Usuario', 'AppData', 'Local', 'Google', 'Chrome', 'User Data')}`, // Ruta al directorio de datos del usuario
//         `--profile-directory=Default` // Nombre del perfil
//       ]
//     });

//     const page = await browser.newPage();

//     console.log('Navegando a la URL...');
//     await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });

//     console.log('Intentando cargar la URL nuevamente...');
//     await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });

//     console.log('Esperando el botón de "Unirse"...');
//     // Cambiar el selector al correcto
//     await page.waitForSelector('a.join-button.btn-primary', { timeout: 15000 });

//     console.log('Haciendo clic en el botón de "Unirse"...');
//     await page.click('a.join-button.btn-primary');

//     console.log('Acción realizada. Mantén la ventana abierta para verificar.');
//   } catch (error) {
//     console.error('Error al iniciar Puppeteer:', error);
//   }
// })();





// // const puppeteer = require('puppeteer');

// // (async () => {
// //   // Inicia el navegador en modo no "headless" para ver la interfaz gráfica
// //   const browser = await puppeteer.launch({ headless: false, defaultViewport: null });

// //   // Abre una nueva página
// //   const page = await browser.newPage();

// //   // Navega a la página deseada
// //   await page.goto('https://awsrestart.instructure.com/courses/3194/conferences');

// //   // Espera a que el botón de "Unirse" esté disponible en la página
// //   await page.waitForSelector('button[aria-label="Unirse"]');

// //   // Haz clic en el botón de "Unirse"
// //   await page.click('button[aria-label="Unirse"]');

// //   // Espera indefinidamente para permitir que observes el navegador
// //   // Puedes ajustar este tiempo o eliminarlo si prefieres que el navegador se cierre automáticamente
// //   console.log('Navegador abierto. Presiona Ctrl+C en la terminal para cerrar el navegador.');
// // })();
// const puppeteer = require('puppeteer');
// const path = require('path');
// const cron = require('node-cron');

// cron.schedule('53 16 * * 1-7', async () => { // Ejecuta a las 9:00 AM de lunes a viernes
//   try { 
//     const browser = await puppeteer.launch({
//       headless: false,
//       executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
//       args: [
//         `--user-data-dir=${path.join('C:', 'Users', 'Usuario', 'AppData', 'Local', 'Google', 'Chrome', 'User Data')}`,
//         `--profile-directory=Default`
//       ]
//     });

//     const page = await browser.newPage();

//     console.log('Navegando a la URL...');
//     await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });

//     console.log('Intentando cargar la URL nuevamente...');
//     await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });

//     console.log('Esperando el botón de "Unirse"...');
//     await page.waitForSelector('a.join-button.btn-primary', { timeout: 15000 });

//     console.log('Haciendo clic en el botón de "Unirse"...');
//     await page.click('a.join-button.btn-primary');

//     console.log('Acción realizada. Mantén la ventana abierta para verificar.');

//   } catch (error) {
//     console.error('Error al iniciar Puppeteer:', error);
//   }
// });



// const puppeteer = require('puppeteer');
// const path = require('path');
// const cron = require('node-cron');
// const moment = require('moment');

// const checkDateAndJoin = async (page) => {
//   try {
//     const today = moment().format('MMM D'); // Formato: "Aug 25"
//         // today = "Aug 22"
//     console.log('Esperando a que la página cargue completamente...');
//     await page.waitForSelector('div.ig-details__item', { timeout: 120000 });

//     const pageDateElement = await page.$('div.ig-details__item');
//     const pageDateText = await pageDateElement.evaluate(el => el.innerText.trim());


    
//     console.log(`Fecha en la página: ${pageDateText}`);
//     console.log(`Fecha actual: ${today}`);

//     if (pageDateText.includes(today)) {
//       console.log('Fecha actual encontrada. Haciendo clic en el botón de "Unirse"...');
//       await new Promise(resolve => setTimeout(resolve, 15000)); // Espera 15 segundos
//       await page.click('a.join-button.btn-primary');
//       console.log('Acción realizada. Mantén la ventana abierta para verificar.');
//     } else {
//       console.log('Fecha actual no encontrada. Esperando 15 segundos para volver a intentar...');
//       await new Promise(resolve => setTimeout(resolve, 15000)); // Espera 15 segundos
//       await checkDateAndJoin(page); // Reintenta la verificación
//     }

//   } catch (error) {
//     console.error('Error al verificar la fecha:', error);
//   }
// };

// cron.schedule('54 16 * * 1-5', async () => { // Ejecuta a las 9:00 AM de lunes a viernes
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
//       args: [
//         `--user-data-dir=${path.join('C:', 'Users', 'Usuario', 'AppData', 'Local', 'Google', 'Chrome', 'User Data')}`,
//         `--profile-directory=Default`,
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//         '--disable-infobars',
//         '--disable-extensions'
//       ]
//     });

//     const page = await browser.newPage();

//     await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

//     console.log('Navegando a la URL...');
//     await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });

//     await checkDateAndJoin(page);

//   } catch (error) {
//     console.error('Error al iniciar Puppeteer:', error);
//   }
// });


const puppeteer = require('puppeteer');
const path = require('path');
const cron = require('node-cron');
const moment = require('moment');


const navigateToUrl = async (page, url) => {
  while (true) {
    try {
      console.log('Navegando a la URL...');
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      console.log('Página cargada exitosamente.');
      break; // Sale del bucle si la navegación fue exitosa
    } catch (error) {
      console.error('Error al navegar a la URL:', error);
      console.log('Esperando 30 segundos antes de reintentar...');
      await new Promise(resolve => setTimeout(resolve, 30000)); // Espera 30 segundos antes de reintentar
    }
  }
};


const tryClickJoinButton = async (page) => {
  while (true) {
    try {
      console.log('Intentando hacer clic en el botón "Unirse"...');
      await page.waitForSelector('a.join-button.btn-primary', { timeout: 30000 }); // Espera hasta 30 segundos
      await page.click('a.join-button.btn-primary');
      console.log('Botón "Unirse" clickeado.');
      break; // Sale del bucle si el clic fue exitoso
    } catch (error) {
      console.log('Botón "Unirse" no encontrado. Esperando 15 segundos para reintentar...');
      await new Promise(resolve => setTimeout(resolve, 30000)); // Espera 15 segundos antes de reintentar
    }
  }
};

const checkDateAndJoin = async (page) => {
  try {
    const today = moment().format('MMM D'); // Formato: "Aug 25"
    console.log('Esperando a que la página cargue completamente...');
    await page.waitForSelector('div.ig-details__item', { timeout: 15000 });

    const pageDateElement = await page.$('div.ig-details__item');
    const pageDateText = await pageDateElement.evaluate(el => el.innerText.trim());

    console.log(`Fecha en la página: ${pageDateText}`);
    console.log(`Fecha actual: ${today}`);

    if (pageDateText.includes(today)) {
      console.log('Fecha actual encontrada. Intentando hacer clic en el botón de "Unirse"...');
      await tryClickJoinButton(page); // Llamar a la función de reintento indefinido
    } else {
      // console.log('Fecha actual no encontrada. Esperando 30 segundos para volver a intentar...');
      // await new Promise(resolve => setTimeout(resolve, 30000)); // Espera 30 segundos
      // await checkDateAndJoin(page); // Reintenta la verificación

       console.log('Fecha actual no encontrada. Recargando la página...');
      await page.reload({ waitUntil: 'networkidle2' }); // Recarga la página
      console.log('Esperando 30 segundos antes de volver a intentar...');
      await new Promise(resolve => setTimeout(resolve, 30000)); // Espera 30 segundos
      await checkDateAndJoin(page); // Reintenta la verificación
    }
  } catch (error) {
    console.error('Error al verificar la fecha:', error);
  }
};

cron.schedule('57 16 * * 1-5', async () => { // Ejecuta a las 9:00 AM de lunes a viernes
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      args: [
        `--user-data-dir=${path.join('C:', 'Users', 'Usuario', 'AppData', 'Local', 'Google', 'Chrome', 'User Data')}`,
        `--profile-directory=Default`,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--disable-extensions'
      ]
    });

    const page = await browser.newPage();

    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // console.log('Navegando a la URL...');
    // await page.goto('https://awsrestart.instructure.com/courses/3194/conferences', { waitUntil: 'networkidle2' });
    // Usa la función de reintento indefinido para cargar la página
    await navigateToUrl(page, 'https://awsrestart.instructure.com/courses/3194/conferences');


    await checkDateAndJoin(page);

  } catch (error) {
    console.error('Error al iniciar Puppeteer:', error);
  }
});



// @echo off

// REM Abre Visual Studio Code con la carpeta y el archivo especificados
// start "" "C:\Users\Usuario\AppData\Local\Programs\Microsoft VS Code\Code.exe" "C:\Users\Usuario\Desktop\practices-live" --open-file "C:\Users\Usuario\Desktop\practices-live\index.js"

// REM Espera 120 segundos
// timeout /t 120

// REM Abre una nueva ventana de CMD y ejecuta el comando
// start "" "C:\Windows\System32\cmd.exe" /k "cd C:\Users\Usuario\Desktop\practices-live && node index.js"



// @echo off

// REM Abre Visual Studio Code con la carpeta especificada y el archivo index.js
// start "" "C:\Users\Usuario\AppData\Local\Programs\Microsoft VS Code\Code.exe" "C:\Users\Usuario\Desktop\practices-live" --open-file "C:\Users\Usuario\Desktop\practices-live\index.js"

// REM Espera 120 segundos para que se cargue completamente
// timeout /t 120 /nobreak >nul

// REM Ejecuta la tarea configurada en tasks.json
// start "" "C:\Users\Usuario\AppData\Local\Programs\Microsoft VS Code\Code.exe" --command "workbench.action.tasks.runTask" --args "Run Node Script"
