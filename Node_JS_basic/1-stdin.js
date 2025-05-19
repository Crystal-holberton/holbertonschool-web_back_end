// Create a program named 1-stdin.js that will be executed through command line
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Handle when the input stream ends (e.g., piped input or Ctrl+D)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
