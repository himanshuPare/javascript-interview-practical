Function.prototype.myBind=function (context,...arg){
 const fn=this;

 return function (...moreArg){
    return fn.apply(context,[...arg,...moreArg]);
 }

}

Function.prototype.myApply=function (context,arg){
    context=context || window;
    const symbole=Symbol();

    context[symbole]=this;
    const res=context[symbole](...(arg || []));
    delete context[symbole];

    return res;
}

Function.prototype.myCall=function (context,...arg){
    context = context || window;
    const fn=Symbol("fn");
    context[fn]=this;
    const res=context[fn](...arg);
    delete context[fn];

    return res;

}