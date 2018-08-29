console.log("starting app ");

setTimeout( () => {
  console.log('inside call back');
} ,2000);

setTimeout( () => {
  console.log('secound setTimeout');
},3000)
console.log('finished ...');
