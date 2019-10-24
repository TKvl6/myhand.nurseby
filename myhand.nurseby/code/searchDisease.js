module.exports.function = function searchDisease(Part, Symptom, LastResults) {
  const diseaseData = require("./data/disease.js");
  const console = require("console");
  const symptomProcess = require("./data/symptomProcess.js");
  const SCORE = require("./data/scoreInfo.js");


  /*------ 선언 ------*/
  let Results = [];             // 최종 반환될 결과


  /*------ 디버깅용 ------*/
  console.log("*--- searchDisease 재오형 알고리즘 적용 ---*");
  if (Part == null) console.log("Part is null")
  else console.log("Part " + Part.length + "개 : " + Part);
  if (Symptom == null) console.log("Symptom is null")
  else console.log("Symptom " + Symptom.length + "개 : " + Symptom);


  /* --- 증상 전처리 ---*/
  if (Symptom != null && Symptom.length != 0) {
    Symptom.forEach(function (item, index, array) {
      var isprocessed = false;
      if (!isprocessed) {
        for (num in symptomProcess) {
          if (symptomProcess[num].indexOf(String(item)) != -1) {
            // 통증 리스트에 있는 경우
            console.log("증상 전처리 : " + Symptom[index] + " -> " + symptomProcess[num][0])
            Symptom[index] = symptomProcess[num][0];
            isprocessed = true;
            return;
          }
        }
      }
    });
  }
  // 발화를 처음 시작하는 경우
  if (LastResults == null) {
    if (Part == null || Part.length == 0) {
      // 입력받은 Part가 없으므로 Symptom으로 Results 만들기
      Symptom.forEach(function (item, index, array) {
        console.log(item, "item 검사")
        /* Core Symptom 검사 */
        for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].core_symptom != null && diseaseData[i].core_symptom.includes(item)) {
            diseaseData[i].score += SCORE.core_symptom;
            if (Results.indexOf(diseaseData[i]) == -1) {
              Results.push(diseaseData[i]);
            }
          }
        }
        /* Symptom 검사 */
        for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].symptom.includes(item)) {
            diseaseData[i].score += SCORE.symptom;
            if (Results.indexOf(diseaseData[i]) == -1)
              Results.push(diseaseData[i]);
          }
        }
      })

    }
    else {
      // Part를 포함하는 임시 질병 list 만들기
      let tempResults = [];
      Part.forEach(function (item, index, array) {
        for (let i = 0; i < diseaseData.length; i++) {
          if (diseaseData[i].part.includes(item)) {
            diseaseData[i].score += SCORE.part;
            if (tempResults.indexOf(diseaseData[i]) == -1)
              tempResults.push(diseaseData[i]);
          }
        }
      });
      if (Symptom != null && !(Symptom.length == 0)) {
        // 임시 질병 list에서 symptom을 포함하는 질병만 걸러내 Results 만들기
        while (tempResults.length != 0) {
          var popDisease = tempResults.pop();
          console.log("pop된 item : ", popDisease)
          Symptom.forEach(function (item, index, array) {
            if (popDisease.symptom.indexOf(item) != - 1) {
              Results.push(popDisease);
            }
          })
        }
      }
      else {
        // Results = 임시 질병 list
        Results = tempResults;
      }
    }
  }
  // 이전 발화(LastResults)에 증상이나 부위를 추가해 상세 검색하는 경우
  else {
    LastResults.forEach(function (item, index, array) {
      // 이전 결과 리스트의 원소들에 대해
      // 이번에 입력받은 Symptom과 Part를 포함하는 질병만 걸러내기
      /***************************************************************************/
    })
  }

  // score 높은 순으로 정렬
  Results.sort(function (a, b) {
    return b.score - a.score;
  });

  let newResults = [];
  for (let i = 0; i < 10; i++) {
    newResults.push(Results[i]);
  }
  console.log(Results);
  console.log("*--- searchDisease END...---*");
  return newResults;
}
