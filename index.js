// add solution here

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (let i = 0; i < musicians.length; i++){
    
     newArr[i] = musicians[i] + " plays " + instruments[i];
    }
  return newArr;
}

theBeatlesPlay(musicians, instruments);


function johnLennonFacts(facts){
  var i = 0;

  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts
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

