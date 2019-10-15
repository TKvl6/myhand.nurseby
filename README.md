# myhand.nurseby

#### 19.10.10

- 각자 작업한 폴더 별로 올리고, commit message '${name}폴더' 이런식으로 알아볼 수 있도록 올리기
- 전처리 및 Back-end : 김태현
- Front-end : 강민기, 박재오
- Back-end : 이상민

###### 회의 내용

> TodoList
>
> 발화 조합 고려해서 Training을 위한 전처리
>
> 발화를 고려해서 유사 단어 하나의 단어로 처리 가능하도록 데이터 처리
>
> View 리스트 작업
>
<<<<<<< HEAD
> Transaction 처리를 하는 동안 데이터를 유지하는 방법 찾기

---

### 19.10.14

- 데이터 처리 과정정리 & core Symptom 작업
- views, layouts 작업 중 데이터 처리 문제로 로직 변경
- - 부위, 증상으로 질병리스트 찾아주기 (기존 방식 고수)
  - 추가로 계속 증상을 입력 받으면서 기존 발화와 합쳐 더 자세한 리스트 정보 가공
  - 결과적으로 사용자가 직접 유사한 질병을 찾고, Detail-view로 확인

>TodoList
>
>coreSymptom 작업한 데이터 합치기
>
>coreSymptom 작업한 내용을 view단에 보여주기
>
>관련 이미지 매칭시키기
>
>증상을 계속 받으며 기존 발화와 합쳐서 재검색하는 transaction 찾기
>
>- action과 concept로 나뉘어 transaction flow로 stories 작성
>- -  https://bixbydevelopers.com/dev/docs/dev-guide/developers/modeling.modeling-actions.transactional-workflows 
>- Training에서 'Continuation of' 기능 사용
>- -  https://bixbydevelopers.com/dev/docs/dev-guide/developers/training.intro-training 

---

### 19.10.15

- View 작업
- - ListView 수정
  - Detail-View 수정
- CoreSymptom 데이터 처리 완료
- CoreSymptom으로 데이터 처리해서 리스트로 가져오게 하는 작업 완료
- 변경된 View로직 문서화

>TodoList
>
>관련 이미지 찾아 매칭시키기
>
>증상을 계속 받으며 기존 발화와 합쳐서 재검색하는 transaction 찾기
>
>발화 단계에서 가능한 조합 설계하기

---

=======
> Transaction 처리를 하는 동안 데이터를 유지하는 방법 찾기.
>>>>>>> 42afe1eec45bd3753d5550b3fb36484eee3a51c2
