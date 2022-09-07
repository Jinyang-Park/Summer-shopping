
# Summer Swimwear Web Project 👙

메인 슬라이드 화면 화살표와 버튼 클릭 시 화면이 움직이고 하단의 신상품순, 추천순, 높은 가격순 등의 버튼 클릭 시 필터링이 되어 해당 아이템들만 보여주는 썸머 수영복 반응형 웹 프로젝트입니다.



![ezgif com-gif-maker](https://user-images.githubusercontent.com/80263801/188314362-4aed870b-eec3-45a1-86e2-de6c54a29293.gif)

---

# 사용스택

<div align="left">
	<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</div>

# 기간

* 2022 7월 4일 ~ 9월 4일 
* 자바스크립트 공부하면서 프로젝트 만드느라 시간이 오래 소요되었다.

# 레퍼런스
* 드림 코딩 by 엘리님의 미니 쇼핑 프로젝트 (기본적인 HTML, CSS 및 Javascript 참고)
<https://youtu.be/We2Kv1HMGvc>
* Billabong Australia website (슬라이드 화면 디자인 참고)
<https://www.billabong.com.au/womens/>
* W Concept website (아이템 레이아웃 및 버튼 디자인 참고 )
<https://www.wconcept.co.kr/WOMEN>
# 주요 기능

* `json`을 통해 데이터를 동적(fetch, data.json)으로 가져와 `map`과 `Join`을 이용하여 HTML string으로 바꾸어 화면 레이아웃을 구성하였다.
* 슬라이드 화면의 화살표와 동그라미 버튼 클릭 시 slide CSS `display: none`으로 다음 이미지가 아래로 보이지 않고 `slides`의 `display:block` 으로 사진들이 화면에서 순서대로 움직인다.
* 상품 필터 버튼 클릭 시 `sort`을 이용하여 각각의 함수 필터 기능을 만들어주고 템플릿 레이아웃 함수를 불러 필터 된 아이템들만 보이도록 코드를 작성하였다.
* 두 가지 768px(태블릿 기준), 360px(모바일 기준) 반응형 웹을 구현하였고 두 사이즈의 중간(510px)에도 미디어 쿼리를 사용하여 자연스럽게 화면이 넘어가도록 만들었습니다.

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/80263801/188370465-aca1fe00-6495-4fee-867b-6ea79df4ea88.gif)

**768px(태블릿기준)**

---

![Animation3](https://user-images.githubusercontent.com/80263801/188370774-be6184c6-85e0-48bd-9585-5ff4728ca190.gif)

**360px(모바일기준), 510px**

---

# 배운 점 

* 화면 레이아웃을 HTML 에 작성하지 않고 json을 통해 데이터를 불러와서 `displayItems` 함수를 이용하여 레이아웃 템플릿을 만들어서 사용하는 부분이 가장 소름 돋으며 인상 깊었다.
* 컬러 변수를 사용하여 CSS 작성법은 많이 사용하여 익숙했지만 공통으로 들어가는 사이즈, 애니메이션까지 변수를 사용하는 방법을 배웠다.
* data.json 파일에 `items`들의 데이터 작성법을 미니 쇼핑 프로젝트에서 배워 이번 수영복 프로젝트에도 응용하여 사용하였다.
* `prev`와 `next` 그리고 `dot` HTML에 `onclick`속성을 사용하여 화살표 클릭 시 화면의 사진이 block이 되면서 디스플레이가 되고 동그라미 버튼이 active가 되는 코드에서 동작의 원리를 이해하였다.
* 필터링 함수에 아이템 데이터를 받아와 높은 가격순, 낮은 가격순, 신상품순, 추천순, 알파벳순으로 정렬하는 코드 부분에서 `sort` 함수를 통해 다양하게 사용하는 법을 배웠다.

# 아쉬운 점

* 로고 클릭 시 아이템 정렬들이 처음 페이지 레이아웃으로 돌아가는 함수를 만들려 기획했으나 끝내 해결하지 못했다.
* (다양한 방법으로 코드를 작성해 보았지만 작동하지 않는 이유를 찾지못했다.)
* 각 필터링 버튼 클릭 후 로고 클릭을 하면 직전에 누른 버튼의 정렬 상태와 동일하였다. 그 이유는 같은 함수 배열을 사용해서 이다. 
* 아직 이 프로젝트는 완성이 아니기 때문에 자바스크립트 공부를 더 하여 이 부분을 꼭 해결하여 다시 업로드 하겠다.
* 필터링 함수에서 `sort` 부분만 작성하고 반복되는 부분은 하나로 묶을 수 있는 방법으로 작성하였으면 좋았을 것 같다.
* CSS에서 슬라이드 화면 화살표 위치를 맞추기 위해 음수를 쓰는 것은 좋지 않은 방법인 것 같다.
