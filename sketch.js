let inputString = ""; 
let soundA, soundB, soundC, soundD, soundBGM;
let soundsLoaded = 0;

function soundLoaded() {
  soundsLoaded++;
  if (soundsLoaded === 5) {
    console.log("모든 사운드 로딩 완료");
  }
}

function preload() {
  soundA = loadSound('audio/EX_KLS_1.mp3', soundLoaded);
  soundB = loadSound('audio/EX_KLS_2.mp3', soundLoaded);
  soundC = loadSound('audio/EX_KLS_3.mp3', soundLoaded);
  soundD = loadSound('audio/EX_KLS_4.mp3', soundLoaded);
  soundBGM = loadSound('audio/buttonBGM(2).mp3', soundLoaded);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if ((keyCode >= 48 && keyCode <= 57) || keyCode === ENTER) {
    soundBGM.play(); // bgm.mp3 재생
  }

  if (keyCode >= 48 && keyCode <= 57) { // 숫자 키인 경우
    inputString += key; // 입력값 문자열에 추가
  } else if (keyCode === ENTER) {
    if (inputString === '00019091918') {
      soundA.play();
    } else if (inputString === '00018941895') {
      soundB.play();
    } else if (inputString === '00018971906') {
      soundC.play();
    } else if (inputString === '00019161918') {
      soundD.play();
    }
    inputString = ""; // 입력 문자열 초기화
  }
}