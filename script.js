// 프로필 이미지 변경
function profileImgToggle() {
  const slideImg = document.getElementById("slide");
  let src = slideImg.src;
  const origin = window.location.origin;
  imgUrl = {
    profile1: "./src/img/profile1.jpeg",
    profile2: "./src/img/profile2.jpeg",
  };

  slideImg.addEventListener("click", (e) => {
    if (src === e.target.src) {
      console.log(e.target);
      e.target.src = imgUrl.profile2;
    } else if (src !== e.target.src) {
      e.target.src = imgUrl.profile1;
    }
  });
}

// 한영 번역 함수
const toggleLangs = () => {
  const tealToggle = document.getElementById("teal-toggle");
  const toggleText = document.querySelector(".toggleText");
  const containerKorean = document.getElementById("containerKorean");
  const containerEnglish = document.getElementById("containerEnglish");

  tealToggle.addEventListener("click", () => {
    let toggle = containerKorean.classList.contains("hidden");
    if (toggle === false) {
      toggleText.textContent = "ENG";
      containerKorean.classList.add("hidden");
      containerEnglish.classList.remove("hidden");
      toggle === !toggle;
    }
    if (toggle === true) {
      toggleText.textContent = "KOR";
      containerKorean.classList.remove("hidden");
      containerEnglish.classList.add("hidden");
      toggle === !toggle;
    }
  });
};

profileImgToggle();
toggleLangs();
