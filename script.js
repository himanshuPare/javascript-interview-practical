console.log('Hello!');
import debounce from "/interview-qusetions/debounce.js"
import throttle from "/interview-qusetions/throttle.js"
import "/interview-qusetions/Array.polyfills.js"
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

// Array Polyfill 
//fiter

const arr=[1,2,3,4,5,6,7,8,9,10,11,22,34,56,78,89,14,23];
const result =arr.myFilter((item)=>{
   return item%2;
})

console.log("myFilter result",result);