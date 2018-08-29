var promise1 = new Promise( (resolve,reject)=> {
  reject('No, it is not working');
});

promise1.then(
  (successMsg)=>{
  console.log('Success: ',successMsg);
},
  (errorMsg) => {
    console.log('Error: ',errorMsg);
  }
)
