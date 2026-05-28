console.log('Hello!');
import debounce from "/interview-qusetions/debounce.js"
import throttle from "/interview-qusetions/throttle.js"
import "/interview-qusetions/function.polyfill.js"
// debounce example 
const searchInput=document.getElementById("searchInput");
const searchOutput=document.getElementById("searchOutput");

const searrchDebounceFn=debounce(() => {
    console.log("search Output",searchInput.value);
    searchOutput.innerHTML=searchInput.value;
  }, 1000);

searchInput.addEventListener(
  "input",
  searrchDebounceFn
);

// throttle example 

const btnThrottle=document.getElementById("btnThrottle");
const throttleOutput=document.getElementById("throttleOutput");

const clickFn=throttle(()=>{
    throttleOutput.innerHTML=new Date();
    console.log("test",new Date())
},5000)

btnThrottle.addEventListener('click',clickFn);


function add (c){
    return this.a+this.b+c;
}

console.log("myApply",add.myApply({a:10,b:25},[25]));
console.log("myCall",add.myCall({a:10,b:25},35));
console.log("myBind",add.myBind({a:10,b:25},15)());
