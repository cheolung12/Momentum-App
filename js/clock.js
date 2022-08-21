const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // String으로 형 변환
  const minutes = String(date.getMinutes()).padStart(2, "0"); // String으로 형 변환
  const seconds = String(date.getSeconds()).padStart(2, "0"); // String으로 형 변환
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 처음에 한번 실행하고
setInterval(getClock, 1000); // 1초마다 계속 실행
