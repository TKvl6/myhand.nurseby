module.exports.function = function searchDisease(inputPart, inputSymptom) {
  const fakeData = require("./data/data.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");
  /*------ 선언부 ------*/
  let results = [];
  // 해당 검색어를 발견했을 때 추가할 점수
  var SCORE = {
    part: 30,
    symtom: 50
  }

    /*------ 디버깅용 ------*/
  if (inputPart == null || inputPart.length == 0)
    console.log("inputPart is null")
  else {
    console.log("inputPart : " + inputPart);
    console.log("inputPart.length : " + inputPart.length)
  }
  if (inputSymptom == null || inputSymptom.length == 0)
    console.log("inputSymptom is null")
  else {
    console.log("inputSymptom : " + inputSymptom);
    console.log("inputSymptom.length : " + inputSymptom.length)
  }

  /* --- 증상 전처리 ---*/
  inputSymptom.forEach(function (item, index, array) {
    var isprocessed = false;
    if (!isprocessed) {
      for (num in symptomProcess) {
        if (symptomProcess[num].indexOf(String(item)) != -1) { // 통증 리스트에 있는 경우
          inputSymptom[index] = symptomProcess[num][0];
          isprocessed = true;
          return;
        }
      }
    }
  });

  /*------ 디버깅용 ------*/
  if (inputPart == null || inputPart.length == 0)
    console.log("inputPart is null")
  else {
    console.log("inputPart : " + inputPart);
    console.log("inputPart.length : " + inputPart.length)
  }
  if (inputSymptom == null || inputSymptom.length == 0)
    console.log("inputSymptom is null")
  else {
    console.log("inputSymptom : " + inputSymptom);
    console.log("inputSymptom.length : " + inputSymptom.length)
  }

  /*------ 실행 ------*/
  if (inputPart == null && inputSymptom == null) {
    // 둘 다 못찾는 경우
  }
  else {
    if (inputPart != null && !(inputPart.length == 0)) {
      inputPart.forEach(function (item, index, array) {
        for (let i = 0; i < fakeData.length; i++) {
          if (fakeData[i].part.includes(item)) {
            fakeData[i].score += SCORE.part;
            if (results.indexOf(fakeData[i]) == -1)
              results.push(fakeData[i]);
          }
        }
      });
    }
    if (inputSymptom != null) {
      for (let i = 0; i < fakeData.length; i++) {
        if (fakeData[i].symptom.includes(inputSymptom + ",")) {
          fakeData[i].score += SCORE.symtom;
          if (results.indexOf(fakeData[i]) == -1)
            results.push(fakeData[i]);
        }
      }
    }
  }
  // score 높은 순으로 정렬
  results.sort(function (a, b) {
    return b.score - a.score;
  });

  console.log(results);
  console.log("###searchDisease() end...");
  return results;
}
