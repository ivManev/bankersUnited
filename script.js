// --- Навигация ---
const tabs = document.querySelectorAll(".tab-menu li");
const contents = document.querySelectorAll(".tab-content");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("tab-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// --- Галерия: модално отваряне със стрелки ---
const modalGalleryImages = document.querySelectorAll('.gallery img'); // различно име
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = -1;

modalGalleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
  currentIndex = -1;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    currentIndex = -1;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex >= 0) {
    currentIndex = (currentIndex + 1) % modalGalleryImages.length;
    modalImg.src = modalGalleryImages[currentIndex].src;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex >= 0) {
    currentIndex = (currentIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
    modalImg.src = modalGalleryImages[currentIndex].src;
  }
});

document.addEventListener('keydown', (e) => {
  if (modal.style.display !== 'flex') return;

  if (e.key === 'ArrowRight') {
    nextBtn.click();
  } else if (e.key === 'ArrowLeft') {
    prevBtn.click();
  } else if (e.key === 'Escape') {
    closeModal.click();
  }
});

// --- Модални карти на футболистите ---
const playerCards = document.querySelectorAll(".player-card");
const playerModal = document.getElementById("player-modal");
const playerModalImg = document.getElementById("player-modal-img");
const playerModalName = document.getElementById("player-modal-name");
const playerModalPosition = document.getElementById("player-modal-position");
const playerModalInfo = document.getElementById("player-modal-info");
const closePlayerModal = document.querySelector(".close-player-modal");

// Данни за играчи (примерни)
const playerData = {
  1: {
    name: "Иван Петров",
    position: "Нападател — #7",
    img: "images/player1.jpg",
    info: "Възраст: 25 г., Ръст: 182 см, Голове: 14"
  },
  2: {
    name: "Георги Стоев",
    position: "Полузащитник — #10",
    img: "images/player2.jpg",
    info: "Възраст: 28 г., Ръст: 178 см, Асистенции: 9"
  },
  3: {
    name: "Страхил Стоев",
    position: "Защитник — #4",
    img: "images/player3.jpg",
    info: "Възраст: 28 г., Ръст: 179 см, Асистенции: 2"
  },
  // Можеш да добавиш още до 25
};

playerCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.player;
    const player = playerData[id];
    if (!player) return;

    playerModalImg.src = player.img;
    playerModalName.textContent = player.name;
    playerModalPosition.textContent = player.position;
    playerModalInfo.textContent = player.info;
    playerModal.style.display = "flex";
  });
});

closePlayerModal.addEventListener("click", () => {
  playerModal.style.display = "none";
});

playerModal.addEventListener("click", (e) => {
  if (e.target === playerModal) {
    playerModal.style.display = "none";
  }
});
