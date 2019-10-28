/*-------Symtopm 전처리 --------- */
module.exports = [
  //["검색 되어야 할 단어", "이 단어가 불릴 수 있는 말1", "이 단어가 불릴 수 있는 말2", ...]
  // 이 리스트에 존재한다면 0번째 인덱스로 바뀜 (ex: inputSymtom = '복통'일 경우 '통증으로 변함)
  ["가려움",       "가려", "가려워", "간지러", "간지러워"],
  ["구토",        "토", "토사물", "먹은거", "구역", "구역질"],    
  ["근육통",       "근육 경직", "근긴장", "근염", "근경령", "근경축", "뭉쳤", "뭉쳐"],
  ["기억력 감소",   "기억", "생각"],                  // XX(이)(가) 안나, 나질 않아
  ["기침",         "콜록"],
  ["감각이상",      "감각"],

  ["답답",         "답답해"],                        //XX해
  ["대변",        "혈변", "흑색변", "설사", "피똥", "똥"],
  ["두근거림",      "두근", "두근거려"],                          // XX거려, XX거리다
  ["두통",         "인후통", "인두통", "머리 아파", "머리가 아파"],

  ["메스꺼움",     "메스꺼워"],

  ["발진",        "피부이상", "습진", "농포", "물집", "수포", "피부발진"],
  ["발열",        "고열", "열나", "열", "뜨거", "뜨거워"], // XXX나, XXX나는 거 같아
  ["발적",         "빨게", "빨갛", "빨"],
  ["부종",         "부어올라", "부었", "부어올랐", "부었어", "부은"],   // XXX어
  ["불면",         "불면증", "불면증상", "잠이"],   // XX 안와

  ["식욕부진",     "식욕 부진", "입맛", "입 맛", "식욕감퇴", "식욕"],  // XXX(이)(가) 없어
  ["소화불량",      "소화 불량", "소화"],           // XX가 안돼
  ["수면",         "수면 곤란", "수면곤란", "수면부족", "수면 부족", "수면 장애", "수면장애"],
  ["스트레스",     "짜증", "짜증나"],
  ["식은땀",       "땀"],
  ["소변",        "혈뇨", "오줌에서 피", "오줌에서피", "피오줌"], // XXX나와, XXX나, XXX나오는 거 같아
  ["습진",        "주부습진"],
  ["시력저하",     "시력", "보이지", "안보"],

  ["악취",         "냄새"],
  ["압통",         "눌림", "눌리", "눌리는"],   // XX는 느낌, XX는 것 같아
  ["오한",         "떨려", "추워", "떨"],
  ["우울감",       "우울", "우울함"],
  ["의식저하",     "혼미", "이상", "혼수"],

  ["저림",         "저려", "저림"],                // XX(이)(가) 느껴져
  ["졸음",        "졸려", "졸"],    // X리다, X려
  ["집중력 저하",  "집중", "집중력"], // XX이 안돼, XXX가 없어
  ["진물", ],

  ["창백",         "핏기"],                         // XX가 없어
  ["추위",         "추워",  "춥고", "춥"],
  ["출혈",        "객혈", "충혈", "피"],
  ["천명",         "호흡음"],                       // XX가 이상해

  ["코막힘",       "콧물", "코딱지"],

  ["통증",        "복통", "아파"],     
  
  ["피로",         "피곤", "힘들", "뻐근"],                           //XXX어
  ["현기증",        "어지러", "어지럽"],                // XXX워, XXX다
  ["호흡곤란",     "숨", "숨쉬기", "숨 쉬기"],  // XXX 힘들어
]