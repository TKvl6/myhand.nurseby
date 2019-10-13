module.exports.function = function searchSymptom (inputSymptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  console.log("###searchSymptom()");
  let results = [];
  
  console.log("inputSymptom : " + inputSymptom);
  if(inputSymptom != null){
      for(let i = 0; i<diseaseData.length; i++){
      let tempData = diseaseData[i];
      if(diseaseData[i].symptom.includes(inputSymptom)){
        results.push(diseaseData[i]);
      }
    }
  }
  console.log(results);
  console.log("###searchSymptom() end...");
  return results;
}
