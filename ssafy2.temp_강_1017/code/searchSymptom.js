module.exports.function = function searchSymptom(Symptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const SCORE = require("./data/scoreInfo.js");

  console.log("*--- searchSymptom ---*");
  let results = [];

  console.log("Symptom : " + Symptom);
  if (Symptom != null) {
    Symptom.forEach(function (item, index, array) {
      for (let i = 0; i < diseaseData.length; i++) {
        if (diseaseData[i].symptom.includes(item)) {
          diseaseData[i].score += SCORE.symptom;
          if (results.indexOf(diseaseData[i]) == -1)
            results.push(diseaseData[i]);
          else
            results[results.indexOf(diseaseData[i])] = diseaseData[i].score;
        }
      }
    })
  }

  console.log(results);
  console.log("*--- searchSymptom END....---*");
  return results;
}
