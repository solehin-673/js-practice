/*

//get average from score of array

let scores=[];
let sum;
let scoreNumber;
let average;
function getAverage(scores) {
   scoreNumber=scores.length;
   sum =0;
   console.log(`number of scores ${scoreNumber}`);
     for(let i=0;i<scoreNumber;i++){
        
        sum += scores[i];
     }
     average=sum/scoreNumber;
     
     return average;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
              //show the return value of getAverage function
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

*/


/*
//grading by score
function getGrade(score) {
   //let grade;
if(score<60){grade="F";}
else if(score<70){grade="D"}
else if(score<80){grade="C"}
else if(score<90){grade="B"}
else if(score<100){grade="A"}
else if(score===100){grade="A++"}
return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

*/

/*
// student have a passing grade or not by boolean value

function hasPassingGrade(score) {
   let  result;
   if(getGrade(score)!="F"){
      return true;
   }
   else{
      return false;
   }   
}



console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
*/

// function getGrade(score) {
// let grade;
// if(score<60){grade="F";}
// else if(score<70){grade="D"}
// else if(score<80){grade="C"}      
// else if(score<90){grade="B"}
// else if(score<100){grade="A"}
// else if(score===100){grade="A++"}
// return grade;
// }

// function getAverage(scores) {
//    scoreNumber=scores.length;
//    sum =0;
//    //console.log(`number of scores ${scoreNumber}`);
//      for(let i=0;i<scoreNumber;i++){
        
//         sum += scores[i];
//      }
//      average=sum/scoreNumber;
     
//      return average;
// }


// function studentMsg(totalScores, studentScore) {
// let msg;
// if(getGrade(studentScore)!=='F'){
//     msg='Class average:' + getAverage(totalScores) + '. Your grade:'
//     + getGrade(studentScore) + '. You passed the course.';
// }else{
//     msg='Class average:' + getAverage(totalScores) + '. Your grade:'
//     + getGrade(studentScore) + '. You failed the course.';
// }
// return msg;
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

var expect = function(val) {
   let a = val;
  //let r;
 function toBe(val){
  let tb = val;
  if(a===tb){ return true;}
  else{ return { error:"Not Equal"} }
  
 }
 function notToBe(val){
  let ntb = val;
  if(a!==ntb){ return true;}
  else{ return{error:"Equal"};}
  
 }
return {toBe,notToBe};

 
};
console.log(expect(5).toBe(null))
