Array.prototype.myFilter=function (fn){
const result=[];
for(let i=0;i<this.length;i++){
    if(fn(this[i],i,this)){
      result.push(this[i])
    }
}

return result;
}

Array.prototype.myMap=function(fn){
const result=[];
this.forEach((item,i)=>{
  result.push(fn(item,i,this));
})

return result;
}

Array.prototype.myFlate=function(){
  
}