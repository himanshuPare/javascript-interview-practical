const throttle=(fn,delay)=>{
 let last=0;
 
 return function(...arg){
  const now =Date.now();

  if(now-last >= delay){
    last=now;
   fn.apply(this,arg);
  }
 }
 
}

export default throttle;