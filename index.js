//ARRAY FIND METHOD

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

//Write function called superbowlWin()
function superbowlWin(element) {
  return(element.result === "W")  
}
record.find(superbowlWin);




// const superbowlWin = (record) => {
//     const result = record.find(record => record.result === "W");
//     if (result === "W"){
//     return result.year;
//     } else 
//     return undefined;
// }

//The function should receive 1 argument, an Array of JavaScript Objects
//Each object has two properties: year and result
//It should use find() to test each Object to see if the result is "W" — a win!
//It should return the year when the win occurred (if it occurred at all!)
//If no win is found, it should return, sadly, undefined


/*
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }
  */