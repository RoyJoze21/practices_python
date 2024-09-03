const puppeteer = require('puppeteer');
const path = require('path');
const cron = require('node-cron');

const joinTeamsMeeting = async (page) => {
  try {
    console.log('Esperando a que la página cargue completamente...');
    await page.waitForSelector('button[data-tid="pre-state-schedule-meeting-join-button"]', { timeout: 45000 });
    await page.click('button[data-tid="pre-state-schedule-meeting-join-button"]');


    console.log('Haciendo clic en el botón "Unirse"...');
   


  // Esperar a que el div con el ícono para desactivar el micrófono esté disponible
await page.waitForSelector('div[aria-label="Micrófono"]', { visible: true, timeout: 30000 });

// Hacer clic en el div para desactivar el micrófono
await page.click('div[aria-label="Micrófono"]');
console.log('Micrófono desactivado');

// Esperar a que el estado del micrófono cambie, por ejemplo, buscando un cambio en el atributo aria-checked
await page.waitForFunction(
  () => document.querySelector('div[aria-label="Micrófono"]').getAttribute('aria-checked') === 'false',
  { timeout: 30000 }
);



    await new Promise(resolve => setTimeout(resolve, 5000));


    await page.waitForSelector('button[data-tid="prejoin-join-button"]', { timeout: 60000 });
    console.log('Haciendo clic en el botón "Unirte ahora"...');
    await page.click('button[data-tid="prejoin-join-button"]');

    console.log('Acción realizada. Mantén la ventana abierta para verificar.');
  } catch (error) {
    console.error('Error al intentar unirse a la reunión:', error);
  }
};

cron.schedule('32 18 * * 1-5', async () => {
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

    console.log('Navegando a la URL del Teams...');
    await page.goto('https://teams.microsoft.com/v2/?meetingjoin=true', { waitUntil: 'networkidle2' });

    await joinTeamsMeeting(page);

  } catch (error) {
    console.error('Error al iniciar Puppeteer:', error);
  }
});






// const puppeteer = require('puppeteer');
// const path = require('path');
// const cron = require('node-cron');

// const joinTeamsMeeting = async (page, browser) => {
//   try {
//     console.log('Esperando a que la página cargue completamente...');
//     await page.waitForSelector('button[data-tid="pre-state-schedule-meeting-join-button"]', { timeout: 45000 });
//     await page.click('button[data-tid="pre-state-schedule-meeting-join-button"]');

//     console.log('Haciendo clic en el botón "Unirse"...');

//     // Esperar a que el div con el ícono para desactivar el micrófono esté disponible
//     await page.waitForSelector('div[aria-label="Micrófono"]', { visible: true, timeout: 30000 });

//     // Hacer clic en el div para desactivar el micrófono
//     await page.click('div[aria-label="Micrófono"]');
//     console.log('Micrófono desactivado');

//     // Esperar a que el estado del micrófono cambie, por ejemplo, buscando un cambio en el atributo aria-checked
//     await page.waitForFunction(
//       () => document.querySelector('div[aria-label="Micrófono"]').getAttribute('aria-checked') === 'false',
//       { timeout: 30000 }
//     );

//     await new Promise(resolve => setTimeout(resolve, 5000));

//     // Esperar a que el botón "Unirte ahora" esté disponible
//     await page.waitForSelector('button[data-tid="prejoin-join-button"]', { timeout: 60000 });
//     console.log('Extrayendo la URL del botón "Unirte ahora"...');

//     // Obtener la URL del botón "Unirte ahora"
//     const meetingUrl = await page.evaluate(() => {
//       return document.querySelector('button[data-tid="prejoin-join-button"]').getAttribute('data-meeting-url');
//     });

//     // Abrir una nueva pestaña con la URL de la reunión
//     const newPage = await browser.newPage();
//     await newPage.goto(meetingUrl, { waitUntil: 'networkidle2' });

//     console.log('Reunión abierta en una nueva pestaña.');
//   } catch (error) {
//     console.error('Error al intentar unirse a la reunión:', error);
//   }
// };

// cron.schedule('32 18 * * 1-5', async () => {
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

//     console.log('Navegando a la URL del Teams...');
//     await page.goto('https://teams.microsoft.com/v2/?meetingjoin=true', { waitUntil: 'networkidle2' });

//     await joinTeamsMeeting(page, browser);

//   } catch (error) {
//     console.error('Error al iniciar Puppeteer:', error);
//   }
// });
