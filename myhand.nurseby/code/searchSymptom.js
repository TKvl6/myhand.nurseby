module.exports.function = function searchSymptom (inputSymptom) {
  const fakeData = require("./data/TempData.js");
  const console = require("console");
  console.log("###searchSymptom()");
  let results = [];
  
  console.log("inputSymptom : " + inputSymptom);
  if(inputSymptom != null){
      for(let i = 0; i<fakeData.length; i++){
      let tempData = fakeData[i];
      if(fakeData[i].symptom.includes(inputSymptom)){
        results.push(fakeData[i]);
      }
    }
  }
  console.log(results);
  console.log("###searchSymptom() end...");
  return results;
}
