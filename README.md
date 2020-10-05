# vue-plate

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---

# vue plate ? 

## 무엇때문에 만들었는가 (시놉시스)

프로젝트를 구성하면서 직접 컨텐츠와 관계없는 기능들에서 시간을 할애해야 할 때가 있습니다.

예를 들면 특정 상황에 스크롤을 잠그는것 같은 일 입니다.

이런 기능은 일반적으로 너무 당연하게 여겨지지만 막상 제작 중반기에 붙일때,

운이 없다면 프로젝트와 꼬여버리는 일이 발생하곤 합니다.

뷰 플레이트는 vue로 제작되는 프로젝트에서 이런 밑바닥 작업에 대해 정의해놓고, 

프로젝트가 시작되면 이런 고민에 대한 생각을 최소화한채 시작할 수 있는 환경을 조성하려고 합니다.

개별적인 상세한 정보는 마크업안에 넣고자 했습니다.

위의 기본 가이드처럼 npm run serve로 로컬에서 실행후 프로젝트에서 내용을 확인해주세요.

모든 내용은 아직 미완성이며 이 프로젝트도 vue-plate에 맞추어 제작했습니다.

추후 바로 프로젝트를 붙일수 있게 내용은 없는 버전도 만들 예정입니다!


## 대표적인 기능 (추가할 예정인것도 포함)

#### 구현

* plate 컨셉으로 준비된 마크업 구조와 스타일
* vue router 기반의 간편한 페이지 세팅
* 지역적으로 작성 가능한 vuex store 시스템 (글로벌 사용)
* cdn 스크립트 vue root에 설치하기
* 확장 가능한 글로벌 모달 영역 (알림 팝업, 확인창 등등)
* 확장 가능한 글로벌 네비게이션 영역
* google analytics 집계
* 기기, OS, 브라우저, 사용자 환경 언어의 탐지
* 조건에 따른 미지원 환경 알림 화면

#### 미구현

* 전역 scss 변수등록
* 클라이언트환경 기준의 다국어 시스템
* api 시스템 정리
* 확장 가능한 글로벌 스피너영역
* 정돈된 vuex작성방법
* 정돈된 마크업 작성방법
* 폰트 내장
* 에셋 관리 폴더링
* 외부 로그인 셋팅
* 정돈된 라우터 가드 작성방법
* 결제 시스템
