console.log(typeof process.argv[1]);

const countdown = (start = 5) => {
  for ( i = start; i > 0; i-- ) {
    console.log(i);
  };
};

const input = parseInt(process.argv[2]);

if (!isNaN(input)) {
  countdown(input);

} else {
  countdown();
  
}
