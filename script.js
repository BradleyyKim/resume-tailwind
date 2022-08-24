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
    // if (toggleTags) {
    // console.log(toggleTags);
    // let toggle = profileKorean.classList.contains("hidden");
    let toggle = containerKorean.classList.contains("hidden");
    console.log(toggle);
    if (toggle === false) {
      toggleText.textContent = "ENG";
      containerKorean.classList.add("hidden");
      // nameKorean.classList.add("hidden");
      // profileKorean.classList.add("hidden");
      // contactKorean.classList.add("hidden");
      // projectKorean.classList.add("hidden");

      containerEnglish.classList.remove("hidden");
      // nameEnglish.classList.remove("hidden");
      // profileEnglish.classList.remove("hidden");
      // contactEnglish.classList.remove("hidden");
      // projectEnglishw.classList.remove("hidden");

      toggle === !toggle;
      console.log("toggle === false 내 토글", toggle);
    }

    if (toggle === true) {
      toggleText.textContent = "KOR";
      containerKorean.classList.remove("hidden");

      // nameKorean.classList.remove("hidden");
      // profileKorean.classList.remove("hidden");
      // contactKorean.classList.remove("hidden");

      containerEnglish.classList.add("hidden");
      // nameEnglish.classList.add("hidden");
      // profileEnglish.classList.add("hidden");
      // contactEnglish.classList.add("hidden");
      console.log("toggle === true 토글", toggle);
      toggle === !toggle;
    }
    // }

    // if (toggle === "hidden") {
    //   toggleText.textContent = "ENG";

    //   nameKorean.classList.add("hidden");
    //   profileKorean.classList.add("hidden");

    //   nameEnglish.classList.remove("hidden");
    //   profileEnglish.classList.remove("hidden");
    //   return (toggleTags.className = "noHidden");
    // }
    // if (toggle === "noHidden") {
    //   toggleText.textContent = "KOR";

    //   nameKorean.classList.remove("hidden");
    //   profileKorean.classList.remove("hidden");

    //   nameEnglish.classList.add("hidden");
    //   profileEnglish.classList.add("hidden");
    //   return (toggleTags.className = "hidden");
    // }
  });
};

toggleLangs();
