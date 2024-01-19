// Check for skipButton only after the extension is opened
window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("skipButton").addEventListener("click", myFunction);
});

function myFunction() {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  alert("Testing Button");
}
