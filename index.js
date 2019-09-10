// add solution here

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (let i; i<musicians.length; i++){
    
     newArr[i] = musicians[i] + " plays " + instruments[i];
    }
  return newArr;
}

theBeatlesPlay(musicians, instruments);


function johnLennonFacts(facts){
  var arr = [];
  var i = 0;
  while(i< facts.length){
    arr += console.log(facts[i] + "!!!");
    i++;
  }
}

// function iLoveTheBeatles (number){
//   var newArry = [];
//   var i = 0; 
  
//   do{
//     newArry[i] = "I love the Beatles!"
//     i++
    
//   }while(number < 15)
//   number++

//   return newArry
// }

