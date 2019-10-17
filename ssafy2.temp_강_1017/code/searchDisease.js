module.exports.function = function searchDisease(Part, Symptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");
  const SCORE = require("./data/scoreInfo.js");


  /*------ 선언부 ------*/
  let results = [];


  /*------ 디버깅용 ------*/
  console.log("*--- searchDisease ---*");
  if (Part == null)
    console.log("Part is null")
  else {
    console.log("Part : " + Part);
    console.log("Part.length : " + Part.length)
  }
  if (Symptom == null)
    console.log("Symptom is null")
  else {
    console.log("Symptom : " + Symptom);
    console.log("Symptom.length : " + Symptom.length)
  }

  /* --- 증상 전처리 ---*/
  Symptom.forEach(function (item, index, array) {
    var isprocessed = false;
    if (!isprocessed) {
      for (num in symptomProcess) {
        if (symptomProcess[num].indexOf(String(item)) != -1) {
          // 통증 리스트에 있는 경우
          Symptom[index] = symptomProcess[num][0];
          isprocessed = true;
          return;
        }
      }
    }
  });

  /*------ 실행 ------*/
  if (Part == null && Symptom == null) {
    // 둘 다 못찾는 경우 < 근데 여기에 들어오진 못할듯
  }
  else {
    /* part 검사 */
    if (Part != null && !(Part.length == 0)) {
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
    /* Symptom 검사 */
    if (Symptom != null && !(Symptom.length == 0)) {
      Symptom.forEach(function (item, index, array) {
        /* Core Symptom 검사 */
        for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].core_symptom != null && diseaseData[i].core_symptom.includes(item)) {
            diseaseData[i].score += SCORE.core_symptom;
            if (results.indexOf(diseaseData[i]) == -1)
              results.push(diseaseData[i]);
          }
        }
        /* Symptom 검사 */
        for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].symptom.includes(item)) {
            diseaseData[i].score += SCORE.symptom;
            if (results.indexOf(diseaseData[i]) == -1)
              results.push(diseaseData[i]);
          }
        }
      })
    }
  }
  // score 높은 순으로 정렬
  results.sort(function (a, b) {
    return b.score - a.score;
  });

  let newResults = [];
  for (let i = 0; i < 10; i++) {
    newResults.push(results[i]);
  }
  console.log(results);
  console.log("*--- searchDisease END...---*");
  return newResults;
}
