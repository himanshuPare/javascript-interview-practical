Promise.myAll=function (promises=[]){
   return new Promise((resolve,reject)=>{
    const result=[];
    let completed=0;
    if(promises.length === 0) {
        resolve([]);
    }

    promises.forEach((promise,i)=>{
     Promise.resolve(promise).then((val)=>{
       result[i]=val;
       completed++;
       if(completed === promises.length){
         resolve(result);
        }
     })
    })
   })
}

Promise.myRace=function(promises=[]){
  return new Promise((resolve,reject)=>{
     promises.forEach((promise)=>{
        Promise.resolve(promise).then(resolve,reject);
     })
  })
}

Promise.myAny=function(promises=[]){
    return new Promise((resolve,reject)=>{
      const error=[];
      let rejectCount=0;
      
      if(promises.length === 0){
        reject(new AggregateError([],"All promise rejected"))
      }
    
      promises.forEach((promise,i)=>{
        Promise.resolve(promise).then((val)=>{
           resolve(val);
        },(err)=>{
        error[i]=err;
        rejectCount++;
        if(rejectCount === promises.length){
            reject(new AggregateError(error,"All promise rejected"))
        }
        })
      })
    })
}