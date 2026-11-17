// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();


// SIDEBAR RESPONSIVE
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
});


// TUTUP SIDEBAR SAAT MENU DIKLIK
document.querySelectorAll(".sidebar nav a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });
});


// NAVIGASI AKTIF SAAT SCROLL
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// TAB WIREFRAME
const tabs = document.querySelectorAll(".tab");
const screens = document.querySelectorAll(".wireframe-screen");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach(item => {
      item.classList.remove("active");
    });

    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    tab.classList.add("active");

    const selectedScreen = document.getElementById(target);

    if (selectedScreen) {
      selectedScreen.classList.add("active");
    }
  });
});


// ANIMASI MUNCUL SAAT SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(
  ".card-box, .info-card, .feature-card, .feature-detail, .diagram-box"
).forEach(element => {
  observer.observe(element);
});

console.log("Website Presentasi SIAKAD berhasil dijalankan.");