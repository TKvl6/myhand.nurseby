module.exports.function = function searchPart (inputPart) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  console.log("###searchPart()");
  let results = [];
  
  console.log("inputPart : " + inputPart);
  if(inputPart != null){
      for(let i = 0; i<diseaseData.length; i++){
      let tempData = diseaseData[i];
      if(diseaseData[i].part.includes(inputPart)){
        results.push(diseaseData[i]);
      }
    }
  }
  console.log(results);
  console.log("###searchPart() end...");
  return results;
}
