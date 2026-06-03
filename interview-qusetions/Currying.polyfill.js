export function Curry(fn){
  return function carried(...args){
    if(args.length >= fn.length){
      return fn(...args)
    }

    return function(...nextArgs){
      return carried(...args,...nextArgs)
    }
  }
}

export default Curry;
