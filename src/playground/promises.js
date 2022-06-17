const promise=new Promise ((resolve,reject)=>{
    setTimeout(()=>{ 
    //    resolve('THIS IS MY Resolved data')
        reject('Something Went Wrong');
},5000);
   
});

console.log("before");

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error :',error)
})


console.log("after");