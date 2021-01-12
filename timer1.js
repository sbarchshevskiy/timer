const args = process.argv;
let argsSlice = args.slice(2);

for (let input of argsSlice) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000);
}



