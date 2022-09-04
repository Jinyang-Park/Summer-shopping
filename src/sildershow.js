let counter = 1; // counter라는 변수 생성
slidefun(counter); // slidefun라는 함수에서 counter 변수를 이용할 예정

function plusSlides(n) {
  // slidefun(counter에 n을 더한 값)실행 prev 클릭 시 -1, next 클릭 시 +1 counter값을 수정하여 화면 전환
  counter += n;
  slidefun(counter);
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
}

function slidefun(n) {
  // slidefun 함수 생성 (n = slidefun)
  let i; // i 변수 생성
  let slides = document.getElementsByClassName("slide"); // 문서 전체내에서 class 이름이 slide인 요소 지정
  let dots = document.getElementsByClassName("dot"); // 문서 전체내에서 class 이름이 dot인 요소 지정
  if (n > slides.length) {
    // 변수 n(slidefun)이 slides의 전체 개수보다 크면 counter의 값을 1로 바꿈
    counter = 1;
  }
  if (n < 1) {
    counter = slides.length; // 변수 n(counter)가 1보다 작으면 counter 값을 slides.length로 바꿈
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[counter - 1].style.display = "block"; // counter -1을 하는 이유: counter가 1인 데이터는 slides[0]에 저장되어있기 때문
  dots[counter - 1].className += " active"; // CSS코드 내 클래스 active dot에 대해 별도 style 지정되어있다. 실행중인 counter에만 style 적용하기 위해 active 추가함
}
