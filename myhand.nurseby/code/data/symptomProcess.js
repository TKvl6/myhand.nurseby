/*-------Symtopm 전처리 --------- */
module.exports = [
  //["검색 되어야 할 단어", "이 단어가 불릴 수 있는 말1", "이 단어가 불릴 수 있는 말2", ...]
  ["통증",        "복통", "아파"],   // 이 리스트에 존재한다면 0번째 인덱스로 바뀜 (ex: inputSymtom = '복통'일 경우 '통증으로 변함)
  ["대변",        "혈변", "흑색변", "설사", "피똥"],
  ["소변",        "혈뇨", "오줌에서 피", "오줌에서피", "피오줌"], // XXX나와, XXX나, XXX나오는 거 같아
  ["발진",        "피부이상", "습진", "농포", "물집", "수포", "피부발진"],
  ["출혈",        "혈변", "객혈", "충혈"],
  ["발열",        "고열", "머리에서 열", "머리에서열", "머리가 뜨", "머리가뜨"], // XXX나, XXX나는 거 같아
  ["졸음",        "졸려", "졸"],    // X리다, X려
  ["집중력 저하",  "집중", "집중력"], // XX이 안돼, XXX가 없어
  ["식욕 부진",    "식욕부진", "입맛", "입 맛", "식욕감퇴", "식욕"],  // XXX(이)(가) 없어
  ["구토",        "토", "토사물", "먹은거"],    
  ["스트레스",     "짜증", "짜증나"],
  ["압통",         "눌림", "눌리", "눌리는"],   // XX는 느낌, XX는 것 같아
  ["호흡곤란",     "숨", "숨쉬기", "숨 쉬기"],  // XXX 힘들어
  ["식은땀",       "땀"],
  ["우울감",       "우울", "우울함"],
  ["수면",         "수면 곤란", "수면곤란", "수면부족", "수면 부족", "수면 장애", "수면장애"],
  ["코막힘",       "콧물", "코딱지"],
  ["기침",         "콜록"],
  ["가려움",       "가려", "가려워", "간지러", "간지러워"],
  ["근육통",       "근육 경직", "근긴장", "근염", "근경령", "근경축"],
  ["두통",         "인후통", "인두통", "머리 아파", "머리가 아파"],
  ["피로",         "힘들"],                           //XXX어
  ["두근거림",      "두근"],                          // XX거려, XX거리다
  ["현기증",        "어지러", "어지럽"],                // XXX워, XXX다
  ["기억력 감소",   "기억", "생각"],                  // XX(이)(가) 안나, 나질 않아
  ["부종",         "부어올라", "부었", "부어올랐"],   // XXX어
  ["창백",         "핏기"],                         // XX가 없어
  ["발적",         "빨게", "빨갛", "빨"],
  ["소화불량",      "소화 불량", "소화"],           // XX가 안돼
  ["천명",         "호흡음"],                       // XX가 이상해
  ["답답",         "답답해"],                        //XX해
  ["저림",         "저려", "저림"],                // XX(이)(가) 느껴져
  ["불면",         "불면증", "불면증상", "잠이"],   // XX 안와
]

module.exports = [
  //["검색 되어야 할 단어", "이 단어가 불릴 수 있는 말1", "이 단어가 불릴 수 있는 말2", ...]
  ["가슴",       "가슴팍"],
  ["간"],
  ["고환"],
  ["관절"],
  ["귀"],
  ["근육",       "그뉵"],
  ["눈",        "눈깔", "눈알", "안구"],
  ["다리",      "레그", "하체"],
  ["등",        "등허리", "등짝"],
  ["허리"],    
  ["림프절"],
  ["머리",      "대가리", "뚜껑", "헤드"],
  ["명치",      "가슴"],
  ["목",        "목부근", "넥"],
  ["무릎",      "무릎팍"],
  ["발",        "발가락", "발꾸락"],
  ["발목"],
  ["방광",      "오줌보"],
  ["복부",      "배"],
  ["사타구니"],
  ["성기"],
  ["생식기"],
  ["손",        "손가락", "손꾸락", "핸드"],
  ["손목"],
  ["아킬레스건", "발뒤쪽"],
  ["어깨"],
  ["엉덩이",     "히프", "궁뎅이"],
  ["위",        "위장"],
  ["임파선"]
  ["입",        "입주변"],
  ["전신",      "온몸", "몸전체"],
  ["척추",      "척추뼈"],
  ["치아",      "이빨", "이"],
  ["코",        "콧구멍"],
  ["턱"],
  ["팔",        "팔꿈치"],
  ["폐"],
  ["피부",       "살"],
  ["항문",       "똥꼬"],
  ["혀",         "설태"]
]