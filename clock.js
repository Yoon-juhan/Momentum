const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 페이지를 로드 하면 바로 함수 실행
setInterval(getClock, 1000); // 위 함수 실행 후 1초 마다 실행