const toggleLangs = () => {
  const tealToggle = document.getElementById("teal-toggle");
  const toggleText = document.querySelector(".toggleText");
  const toggleTags = document.querySelectorAll(".allToggles");
  const containerKorean = document.getElementById("containerKorean");
  const containerEnglish = document.getElementById("containerEnglish");

  // const profileKorean = document.getElementById("profileKorean");
  // const profileEnglish = document.getElementById("profileEnglish");
  // const nameKorean = document.getElementById("nameKorean");
  // const nameEnglish = document.getElementById("nameEnglish");
  // const contactKorean = document.getElementById("contactKorean");
  // const contactEnglish = document.getElementById("contactEnglish");
  // const projectKorean = document.getElementById("projectKorean");
  // const projectEnglish = document.getElementById("projectEnglish");

  tealToggle.addEventListener("click", () => {
    let toggle = containerKorean.classList.contains("hidden");
    console.log(toggle);
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

toggleLangs();
