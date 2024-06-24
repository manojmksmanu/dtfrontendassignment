document.addEventListener("DOMContentLoaded", () => {
  const slidingSection = document.getElementById("slidingSection");
  const toggleButton = document.getElementById("toggleButton");
  const arrow = document.getElementById("arrow");
  const slidingcontent= document.getElementById("sliding_content")
  toggleButton.addEventListener("click", () => {
    if (slidingSection.style.left === "0px") {
      slidingSection.style.left = "-260px"; // 
      arrow.style.transform = "rotate(0deg)"; // Arrow points to the right
     slidingcontent.style.visibility = "hidden";
    } else {
      slidingSection.style.left = "0px";
      arrow.style.transform = "rotate(180deg)"; // Arrow points to the left
       slidingcontent.style.visibility = "visible";
    }
  });
});



