import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import cowsay from 'cowsay';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your URL: ',
      name: 'URL',
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('github_qr.png'));

    console.log('QR code image generated and saved as lo_qr.png');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });


//  cowsay (JavaScript FTW!),
  var message = 'Enter your URL below to generate QR code';
  var  cowArt = cowsay.say({ text: message});

    console.log(cowArt);