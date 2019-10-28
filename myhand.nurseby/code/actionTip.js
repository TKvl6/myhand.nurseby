module.exports.function = function actionTip(disease) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  
  console.log("*--- actionTip ---*");
  let results = [];

  console.log("disease : " + disease);
  // if (Name != null) {
  //   Name.forEach(function (item, index, array) {
  //     for (let i = 0; i < diseaseData.length; i++) {
  //       if (diseaseData[i].part.includes(item)) {
  //         diseaseData[i].score += SCORE.part;
  //         if (results.indexOf(diseaseData[i]) == -1)
  //           results.push(diseaseData[i]);
  //       }
  //     }
  //   });
  // }
  results = {
    disease : disease
  }
  console.log(results);
  console.log("*--- actionTip END...---*");
  return results;
}
