function outer(){
    function math(){
            const a = 5;
            const b = 4;
           return{ add: function (){
                    return a+b;},

                   sub: function(){
                        return a-b;
                 }
                 }
            }
            return math();// it returns the return value of math() function 
            // it is return function for outer function
    }
   


const add1 = outer();// outer()>> math()>>add() & sub()
console.log(add1.add());