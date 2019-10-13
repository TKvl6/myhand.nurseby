module.exports.function = function searchDisease(inputPart, inputSymptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");

  /*------ 선언부 ------*/
  let results = [];
  // 해당 검색어를 발견했을 때 추가할 점수
  var SCORE = {
    part: 30,
    symtom: 50
  }
  // 같은 기침이라도 걸릴 확률 = 감기 > 결핵 >>>> 암 이기때문에
  // 배율 (mul) 같은 속성을 추가해서 추가될 때 점수에 곱하면 어떨까

  /*------ 디버깅용 ------*/
  if (inputPart == null)
    console.log("inputPart is null")
  else {
    console.log("inputPart : " + inputPart);
    console.log("inputPart.length : " + inputPart.length)
  }
  if (inputSymptom == null)
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
        if (symptomProcess[num].indexOf(String(item)) != -1) {
          // 통증 리스트에 있는 경우
          inputSymptom[index] = symptomProcess[num][0];
          isprocessed = true;
          return;
        }
      }
    }
  });

  /*------ 실행 ------*/
  if (inputPart == null && inputSymptom == null) {
    // 둘 다 못찾는 경우
  }
  else {
    if (inputPart != null && !(inputPart.length == 0)) {
      // inputPart.forEach(function (item, index, array) {
      //   for (let i = 0; i < fakeData.length; i++) {
      //     if (fakeData[i].part.includes(item)) {
      //       fakeData[i].score += SCORE.part;
      //       if (results.indexOf(fakeData[i]) == -1)
      //         results.push(fakeData[i]);
      //     }
      //   }
      // });
      for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].part.includes(inputPart+",")) {
            diseaseData[i].score += SCORE.part;
            if (results.indexOf(diseaseData[i]) == -1)
              results.push(diseaseData[i]);
          }
        }

    }
    if (inputSymptom != null) {
      for (let i = 0; i < diseaseData.length; i++) {
        // ","를 추가해야 '피' 검색했을 때 '피부 질환' 이런게 나옴
        // 현재는 임시로 , 추가해서 해결
        // symtom 배열로 바꿀 필요있음!
        if (diseaseData[i].symptom.includes(inputSymptom)) {
          diseaseData[i].score += SCORE.symtom;
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
