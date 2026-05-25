const debounce =(fn,delay)=>{
let timer;

return function (...arg){
 const context=this;

 clearTimeout(timer);

 timer=setTimeout(()=>{
   fn.apply(context,arg)
 },delay)

};
}

export default debounce;