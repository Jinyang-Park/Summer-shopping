
# Summer Swimwear Web Project 👙

메인 슬라이드 화면 화살표와 버튼 클릭 시 화면이 움직이고 하단의 신상품순, 추천순, 높은 가격순 등의 버튼 클릭 시 필터링이 되어 해당 아이템들만 보여주는 썸머 수영복 웹 프로젝트입니다.



![ezgif com-gif-maker](https://user-images.githubusercontent.com/80263801/188314362-4aed870b-eec3-45a1-86e2-de6c54a29293.gif)


### 사용스택

<div align="left">
	<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</div>

### 기간

* 2022 7월 4일 ~ 9월 4일 
* 자바스크립트 공부하면서 프로젝트 만드느라 시간이 오래 소요되었다.

### 주요 기능

* 슬라이드 화면의 화살표와 동그라미 버튼 클릭 시 slide CSS `display: none`으로 다음 이미지가 아래로 보이지 않고 `slides`의 `display:block` 으로 사진들이 화면에서 순서대로 움직인다.
* `json`을 통해 데이터를 가져와 아이템의 템플릿 함수를 만들어 기본 화면 레이아웃을 만들었다.
* 상품 정렬 필터 클릭 시 `sort`을 이용하여 각각의 함수 필터 기능을 만들어주고 템플릿 레이아웃 함수를 불러 필터된 아이템들만 보이도록 코드를 작성하였다.
* 두 가지 768px(태블릿기준), 360px(모바일기준) 반응형 웹을 구현하였고 두 사이즈의 중간(510px)에도 미디어 쿼리를 사용하여 자연스럽게 화면이 넘어가도록 만들었습니다.
