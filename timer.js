const timecheck = process.argv.slice(2).sort((a,b) => a - b);

if (timecheck.length === 0) {
  console.log(`not a valid input`);
}
for (let i in timecheck) {
  if (timecheck[i] > 0 || typeof timecheck === `number`) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(".", timecheck[i]);
    },timecheck[i] * 1000);
  }
}
