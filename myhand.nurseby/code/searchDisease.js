module.exports.function = function searchDisease(Part, Symptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");

  /*------ 선언부 ------*/
  let results = [];
  // 해당 검색어를 발견했을 때 추가할 점수
  var SCORE = {
    part: 30,
    symptom: 50,
    core: 150
  }

  /*------ 디버깅용 ------*/
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
    // 둘 다 못찾는 경우
  }
  else {
    if (Part != null && !(Part.length == 0)) {
      // Part.forEach(function (item, index, array) {
      //   for (let i = 0; i < fakeData.length; i++) {
      //     if (fakeData[i].part.includes(item)) {
      //       fakeData[i].score += SCORE.part;
      //       if (results.indexOf(fakeData[i]) == -1)
      //         results.push(fakeData[i]);
      //     }
      //   }
      // });
      for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].part.includes(Part+",")) {
            diseaseData[i].score += SCORE.part;
            if (results.indexOf(diseaseData[i]) == -1)
              results.push(diseaseData[i]);
          }
        }

    }
    if (Symptom != null) {
      for (let i = 0; i < diseaseData.length; i++) {
        if (diseaseData[i].symptom.includes(Symptom)) {
          diseaseData[i].score += SCORE.symptom;
          if (results.indexOf(diseaseData[i]) == -1)
            results.push(diseaseData[i]);
        }
      }
    }
  }
  // score 높은 순으로 정렬
  results.sort(function (a, b) {
    return b.score - a.score;
  });

  let newResults = [];
  for(let i=0; i<10; i++){
    newResults.push(results[i]);
  }
  console.log(results);
  console.log("###searchDisease() end...");
  return newResults;
}
