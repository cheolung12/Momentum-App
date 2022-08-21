const images = ["0.jpeg", "1.jpeg", "2.jpeg"]; //img 폴더에 넣어놓은 이미지 파일들

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //JS에서 html element 생성
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage); //appendChild는 body에 element를 추가한다
