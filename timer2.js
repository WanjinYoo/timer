const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


const callalram = (i) => {
  if (i === 0) process.stdout.write('\x07');
  else {
    console.log(`setting timer for ${i} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("%d seconds has passed", i);
    },i * 1000);
  }
};

stdin.on('data', (key) => {
  process.stdout.write(key);
  if (key === '\u0003') {
    console.log(`Thanks for using me`);
    process.exit();
  } else if (key === `b`) {
    callalram(0);
  } else if (!isNaN(key)) {
    callalram(key);
  }
});
