module.exports.function = function searchPart (inputPart) {
  const fakeData = require("./data/TempData.js");
  const console = require("console");
  console.log("###searchPart()");
  let results = [];
  
  console.log("inputPart : " + inputPart);
  if(inputPart != null){
      for(let i = 0; i<fakeData.length; i++){
      let tempData = fakeData[i];
      if(fakeData[i].part.includes(inputPart)){
        results.push(fakeData[i]);
      }
    }
  }
  console.log(results);
  console.log("###searchPart() end...");
  return results;
}
