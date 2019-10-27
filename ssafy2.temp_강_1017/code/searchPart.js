module.exports.function = function searchPart(Part) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const SCORE = require("./data/scoreInfo.js");
  
  console.log("*--- searchPart ---*");
  let results = [];

  console.log("Part : " + Part);
  if (Part != null) {
    Part.forEach(function (item, index, array) {
      for (let i = 0; i < diseaseData.length; i++) {
        if (diseaseData[i].part.includes(item)) {
          diseaseData[i].score += SCORE.part;
          if (results.indexOf(diseaseData[i]) == -1)
            results.push(diseaseData[i]);
        }
      }
    });
  }
  console.log(results);
  console.log("*--- searchPart END...---*");
  return results;
}
