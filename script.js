const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");

let today = new Date();
var time = today.getHours();

function darkMode() {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}

function lightMode() {
  document.documentElement.setAttribute("data-theme", "light");
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

const switchTheme = (e) => {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  localStorage.setItem("theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

if (time >= 19 && time <= 6) {
  darkMode();
  toggleSwitch.setAttribute("checked", true);
}
