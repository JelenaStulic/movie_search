const debounce = (callbackfunc, delay = 1000) => {
    let timeoutId;
    return (...args) => { // vraća wrapper function
      if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callbackfunc.apply(null, args); //isto kao i funkcija(arg1, arg2, arg3 i vec koliko ih ima)
        }, 
        delay); 
    }
}
