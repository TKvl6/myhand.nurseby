module.exports.function = function searchDisease(inputPart, inputSymptom) {
  const fakeData = require("./data/TempData.js");
  const console = require("console");

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
  else
    console.log("inputSymptom : " + inputSymptom);


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
        // ","를 추가해야 '피' 검색했을 때 '피부 질환' 이런게 나옴
        // 현재는 임시로 , 추가해서 해결
        // symtom 배열로 바꿀 필요있음!
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