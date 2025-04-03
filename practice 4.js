function createCounter(init){
    let a= init;
    function increment(){
        a=a+1;
        return a;
    }
    function decrement(){
        a=a-1;
        return a;
    }
    function reset(){
       a  = init ;
        return a;
    }
    return {increment,reset,decrement};// function can't be called directly

};
const counter = createCounter(5)
 counter.increment(); // 6
 counter.reset(); // 5
 counter.decrement(); // 4