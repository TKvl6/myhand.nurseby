module.exports.function = function detailDesc(Name) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  console.log(Name);
  let result;
  for (let i = 0; i < diseaseData.length; i++) {
    if (diseaseData[i].name == Name) {
      result = diseaseData[i];
      break;
    }
  }
  console.log(result);
  return result;
}
