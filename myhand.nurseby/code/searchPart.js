module.exports.function = function searchPart (Part) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  console.log("###searchPart()");
  let results = [];
  
  console.log("Part : " + Part);
  if(Part != null){
      for(let i = 0; i<diseaseData.length; i++){
      let tempData = diseaseData[i];
      if(diseaseData[i].part.includes(Part)){
        results.push(diseaseData[i]);
      }
    }
  }
  console.log(results);
  console.log("###searchPart() end...");
  return results;
}
