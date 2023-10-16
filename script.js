function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
const infoToggles = document.querySelectorAll('.info-toggle');
const projectItems = document.querySelectorAll('.project-item');

infoToggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        projectItems[index].classList.toggle('expanded');
    });
});
