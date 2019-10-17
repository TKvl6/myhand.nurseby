module.exports.function = function searchDisease(Part, Symptom) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");
  const SCORE = require("./data/scoreInfo.js");


  /*------ 선언부 ------*/
  let results = [];             // 최종 반환될 결과
  let tempResults = {
    part: [],
    coreSymptom: [],
    symptom: []
  }



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
  /* part 검사 */
  if (Part != null && !(Part.length == 0)) {
    Part.forEach(function (item, index, array) {
      for (let i = 0; i < diseaseData.length; i++) {
        if (diseaseData[i].part.includes(item)) {
          diseaseData[i].score += SCORE.part;
          if (tempResults.part.indexOf(diseaseData[i]) == -1)
            tempResults.part.push(diseaseData[i]);
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
          if (tempResults.coreSymptom.indexOf(diseaseData[i]) == -1)
            tempResults.coreSymptom.push(diseaseData[i]);
        }
      }
      /* Symptom 검사 */
      for (let i = 0; i < diseaseData.length; i++) {
        if (diseaseData[i].symptom.includes(item)) {
          diseaseData[i].score += SCORE.symptom;
          if (tempResults.symptom.indexOf(diseaseData[i]) == -1)
            tempResults.symptom.push(diseaseData[i]);
        }
      }
    })
  }
  // 각각의 tempResults.part배열의 part가 "등, 코, 눈 " 와 같이 되어있는데
  // 이를 ,로 구분해서 나누고 tempResults.symptom의 원소들 중 '등', '코', '눈' 중 하나라도
  // 가지고 있지 않으면 
  /*----results 처리 -----*/
  for (num in tempResults.part) {
    var findCS = false;
    var findS = false;
    /* Core Symptom 검사 */
    for (let i = 0; i < tempResults.coreSymptom.length; i++) {
      console.log(Part[0], "과 검사 : ", tempResults.coreSymptom[i].part)
      if (tempResults.coreSymptom[i].part.includes(Part[0])) {
        findCS = true;
        if (results.indexOf(tempResults.part[i]) == -1)
          results.push(tempResults.part[i])
      }
    }
    /* Symptom 검사 */
    for (let i = 0; i < tempResults.symptom.length; i++) {
      console.log(Part[0], "과 검사 : ", tempResults.symptom[i].part)
      if (tempResults.symptom[i].part.includes(Part[0])) {
        findS = true;
        if (results.indexOf(tempResults.part[i]) == -1)
          results.push(tempResults.part[i])
      }
    }
    if (!findCS && !findS) // 둘 다 못찾으면 넘어가기
      continue

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
