// --- Мобилна навигация (хамбургер меню) ---
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("tab-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Затваряме менюто при клик върху линк (на мобилни устройства)
  const navLinks = menu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
    });
  });
}

// --- Галерия: модално отваряне със стрелки ---
const modalGalleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = -1;

// Проверяваме дали сме на страницата с галерия
if (modalGalleryImages.length > 0 && modal && modalImg) {
  modalGalleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      currentIndex = index;
      document.body.style.overflow = 'hidden'; // Спираме скролирането на фона
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = "none";
      currentIndex = -1;
      document.body.style.overflow = 'auto';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      currentIndex = -1;
      document.body.style.overflow = 'auto';
    }
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex >= 0) {
        currentIndex = (currentIndex + 1) % modalGalleryImages.length;
        modalImg.src = modalGalleryImages[currentIndex].src;
        modalImg.alt = modalGalleryImages[currentIndex].alt;
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex >= 0) {
        currentIndex = (currentIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
        modalImg.src = modalGalleryImages[currentIndex].src;
        modalImg.alt = modalGalleryImages[currentIndex].alt;
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (modal.style.display !== 'flex') return;

    if (e.key === 'ArrowRight' && nextBtn) {
      nextBtn.click();
    } else if (e.key === 'ArrowLeft' && prevBtn) {
      prevBtn.click();
    } else if (e.key === 'Escape' && closeModal) {
      closeModal.click();
    }
  });
}

// --- Модални карти на футболистите ---
const playerCards = document.querySelectorAll(".player-card");
const playerModal = document.getElementById("player-modal");
const playerModalImg = document.getElementById("player-modal-img");
const playerModalName = document.getElementById("player-modal-name");
const playerModalPosition = document.getElementById("player-modal-position");
const playerModalInfo = document.getElementById("player-modal-info");
const closePlayerModal = document.querySelector(".close-player-modal");

// Актуализирани данни за играчи с правилните снимки
const playerData = {
  1: {
    name: "Иван Петров",
    position: "Нападател — #7",
    img: "images/gervinho.jpg",
    info: "Възраст: 25 г., Ръст: 182 см, Голове: 14 за сезона. Бърз и техничен нападател с отлично финализиране."
  },
  2: {
    name: "Георги Стоев",
    position: "Полузащитник — #10",
    img: "images/yayasanogo.jpg",
    info: "Възраст: 28 г., Ръст: 178 см, Асистенции: 9 за сезона. Творчески играч с отлична визия за игра."
  },
  3: {
    name: "Страхил Стоев",
    position: "Защитник — #4",
    img: "images/lansbery.jpg",
    info: "Възраст: 26 г., Ръст: 185 см, Голове: 2 за сезона. Надежден централен защитник с добра игра във въздуха."
  },
  4: {
    name: "Мартин Иванов",
    position: "Вратар — #1",
    img: "images/gervinho.jpg",
    info: "Възраст: 29 г., Ръст: 190 см, Спасявания: 45 за сезона. Опитен вратар с отлични рефлекси."
  },
  5: {
    name: "Петър Георгиев",
    position: "Защитник — #3",
    img: "images/yayasanogo.jpg",
    info: "Възраст: 24 г., Ръст: 179 см, Асистенции: 3 за сезона. Бърз ляв бек с добри офанзивни качества."
  }
};

// Проверяваме дали сме на страницата с играчи
if (playerCards.length > 0 && playerModal) {
  playerCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.player;
      const player = playerData[id];
      if (!player) return;

      if (playerModalImg) {
        playerModalImg.src = player.img;
        playerModalImg.alt = player.name;
      }
      if (playerModalName) playerModalName.textContent = player.name;
      if (playerModalPosition) playerModalPosition.textContent = player.position;
      if (playerModalInfo) playerModalInfo.textContent = player.info;
      playerModal.style.display = "flex";
      document.body.style.overflow = 'hidden';
    });
  });

  if (closePlayerModal) {
    closePlayerModal.addEventListener("click", () => {
      playerModal.style.display = "none";
      document.body.style.overflow = 'auto';
    });
  }

  playerModal.addEventListener("click", (e) => {
    if (e.target === playerModal) {
      playerModal.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  });

  // Escape key за затваряне на модала
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && playerModal.style.display === 'flex') {
      playerModal.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  });
}

// --- Функционалност на формата за контакти ---

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const successMessage = document.getElementById('form-success');

  // Функции за валидация
  function showError(field, message) {
    const errorElement = document.getElementById(field.id + '-error');
    if (errorElement) {
      errorElement.textContent = message;
      field.classList.add('error');
    }
  }

  function clearError(field) {
    const errorElement = document.getElementById(field.id + '-error');
    if (errorElement) {
      errorElement.textContent = '';
      field.classList.remove('error');
    }
  }

  // Валидация в реално време
  [nameField, emailField, messageField].forEach(field => {
    if (field) {
      field.addEventListener('input', () => clearError(field));
      field.addEventListener('blur', () => validateField(field));
    }
  });

  // Функция за валидация на отделно поле
  function validateField(field) {
    let isValid = true;
    
    if (field === nameField) {
      if (!field.value.trim()) {
        showError(field, 'Моля, въведете вашето име');
        isValid = false;
      } else if (field.value.trim().length < 2) {
        showError(field, 'Името трябва да е поне 2 символа');
        isValid = false;
      }
    }
    
    if (field === emailField) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!field.value.trim()) {
        showError(field, 'Моля, въведете вашия имейл');
        isValid = false;
      } else if (!emailRegex.test(field.value)) {
        showError(field, 'Моля, въведете валиден имейл адрес');
        isValid = false;
      }
    }
    
    if (field === messageField) {
      if (!field.value.trim()) {
        showError(field, 'Моля, въведете съобщение');
        isValid = false;
      } else if (field.value.trim().length < 10) {
        showError(field, 'Съобщението трябва да е поне 10 символа');
        isValid = false;
      }
    }
    
    return isValid;
  }

  // Обработка на изпращането на формата с Formspree
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Валидация на всички полета
    let isFormValid = true;
    [nameField, emailField, messageField].forEach(field => {
      if (field && !validateField(field)) {
        isFormValid = false;
      }
    });
    
    if (!isFormValid) {
      return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Показваме loading състояние
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Изпращане...';
    submitButton.disabled = true;
    
    try {
      // Създаваме FormData от формата
      const formData = new FormData(contactForm);
      
      // Изпращаме към Formspree
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Успех!
        successMessage.style.display = 'flex';
        contactForm.style.display = 'none';
        successMessage.scrollIntoView({ behavior: 'smooth' });
        
        // Възстановяваме формата след 5 секунди
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = 'block';
          successMessage.style.display = 'none';
          submitButton.innerHTML = originalText;
          submitButton.disabled = false;
          
          // Почистваме всички грешки
          [nameField, emailField, messageField].forEach(field => {
            if (field) clearError(field);
          });
        }, 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Грешка при изпращането');
      }
    } catch (error) {
      console.error('Грешка:', error);
      alert('Възникна грешка при изпращането на съобщението. Моля, опитайте отново или се свържете с нас директно на info@bankersunited.bg');
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    }
  });
}

// Lazy loading с Intersection Observer
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        
        // Премахваме loading анимацията когато изображението се зареди
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
        
        // Ако изображението вече е заредено
        if (img.complete) {
          img.classList.add('loaded');
        }
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px' // Започваме зареждането 50px преди да стане видимо
  });

  // Наблюдаваме всички изображения с loading="lazy"
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Fallback за стари браузъри
else {
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.classList.add('loaded');
  });
}

// Обновяване на галерията за високо качество в modal
const galleryImages = document.querySelectorAll('.gallery-img');
if (galleryImages.length > 0) {
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      const largeImageSrc = img.dataset.large || img.src;
      modalImg.src = largeImageSrc;
      modalImg.alt = img.alt;
      modal.style.display = "flex";
      currentIndex = index;
      document.body.style.overflow = 'hidden';
    });
  });
}

// Функционалност за резултати и мачове
document.addEventListener('DOMContentLoaded', function() {
  // Проверяваме дали сме на страницата с резултати
  if (window.location.pathname.includes('results.html') || document.getElementById('matches-container')) {
    initializeResultsPage();
  }
});

async function initializeResultsPage() {
  console.log('Инициализиране на страницата с резултати...');
  
  try {
    // Показваме loading състояние
    const container = document.getElementById('matches-container');
    container.innerHTML = `
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Зареждане на резултатите...</p>
      </div>
    `;

    // Зареждаме данните
    console.log('Зареждане на matches.json...');
    const matchesResponse = await fetch('matches.json');
    if (!matchesResponse.ok) {
      throw new Error(`HTTP error! status: ${matchesResponse.status}`);
    }
    const matchesData = await matchesResponse.json();
    console.log('Matches data loaded:', matchesData);

    console.log('Зареждане на player-stats.json...');
    const statsResponse = await fetch('player-stats.json');
    if (!statsResponse.ok) {
      throw new Error(`HTTP error! status: ${statsResponse.status}`);
    }
    const statsData = await statsResponse.json();
    console.log('Stats data loaded:', statsData);
    
    // Обновяваме статистиката на отбора
    updateTeamSummary(statsData.teamStats);
    
    // Показваме мачовете
    displayMatches(matchesData.matches);
    
    // Настройваме филтрите
    setupMatchFilters(matchesData.matches);
    
    // Настройваме модалния прозорец
    setupMatchModal();
    
    console.log('Страницата е инициализирана успешно!');
    
  } catch (error) {
    console.error('Грешка при зареждането на данните:', error);
    
    // Показваме грешка с инструкции
    document.getElementById('matches-container').innerHTML = `
      <div class="error-message" style="text-align: center; padding: 2rem; background: #f8d7da; color: #721c24; border-radius: 8px; margin: 1rem 0;">
        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <h3>Възникна грешка при зареждането на резултатите</h3>
        <p><strong>Възможни причини:</strong></p>
        <ul style="text-align: left; display: inline-block;">
          <li>Файловете matches.json и player-stats.json не са създадени</li>
          <li>Файловете не са в главната папка на сайта</li>
          <li>Има грешка в JSON синтаксиса</li>
          <li>Сайтът не се зарежда от HTTP server (file:// protocol)</li>
        </ul>
        <p><strong>Решение:</strong> Проверете конзолата на браузъра за повече детайли</p>
        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Опитай отново
        </button>
      </div>
    `;
    
    // Показваме примерни данни за демонстрация
    showSampleData();
  }
}

function showSampleData() {
  console.log('Показване на примерни данни...');
  
  // Примерни данни за демонстрация
  const sampleMatches = [
    {
      id: 1,
      date: "2025-08-15",
      time: "19:00",
      opponent: "Левски София",
      homeTeam: "Bankers United",
      awayTeam: "Левски София",
      isHome: true,
      status: "finished",
      result: { home: 2, away: 1 },
      venue: "Стадион Банка Арена",
      competition: "Първа лига",
      goals: [
        { playerId: 1, playerName: "Иван Петров", minute: 23, team: "home" },
        { playerId: 2, playerName: "Георги Стоев", minute: 67, team: "home" }
      ],
      cards: []
    },
    {
      id: 2,
      date: "2025-09-05",
      time: "19:00",
      opponent: "Лудогорец",
      homeTeam: "Лудогорец",
      awayTeam: "Bankers United",
      isHome: false,
      status: "upcoming",
      result: null,
      venue: "Huvepharma Arena",
      competition: "Първа лига",
      goals: [],
      cards: []
    }
  ];
  
  const sampleStats = {
    wins: 2,
    draws: 1,
    losses: 0,
    goalsFor: 6,
    goalsAgainst: 3
  };
  
  // Обновяваме статистиката
  updateTeamSummary(sampleStats);
  
  // Показваме примерните мачове
  displayMatches(sampleMatches);
  
  // Настройваме филтрите
  setupMatchFilters(sampleMatches);
  
  // Настройваме модалния прозорец
  setupMatchModal();
  
  // Добавяме съобщение за примерните данни
  const container = document.getElementById('matches-container');
  container.insertAdjacentHTML('afterbegin', `
    <div style="background: #d1ecf1; color: #0c5460; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; text-align: center;">
      <i class="fas fa-info-circle"></i>
      <strong>Демонстрационни данни:</strong> Показани са примерни мачове, защото JSON файловете не са заредени правилно.
    </div>
  `);
}

function updateTeamSummary(teamStats) {
  console.log('Обновяване на статистиката:', teamStats);
  
  const winsElement = document.getElementById('wins-count');
  const drawsElement = document.getElementById('draws-count');
  const lossesElement = document.getElementById('losses-count');
  const goalsElement = document.getElementById('goals-ratio');
  
  if (winsElement) winsElement.textContent = teamStats.wins || 0;
  if (drawsElement) drawsElement.textContent = teamStats.draws || 0;
  if (lossesElement) lossesElement.textContent = teamStats.losses || 0;
  if (goalsElement) goalsElement.textContent = `${teamStats.goalsFor || 0}:${teamStats.goalsAgainst || 0}`;
}

function displayMatches(matches, filter = 'all') {
  console.log('Показване на мачове:', matches.length, 'филтър:', filter);
  
  const container = document.getElementById('matches-container');
  
  // Филтрираме мачовете според избора
  let filteredMatches = matches;
  if (filter !== 'all') {
    filteredMatches = matches.filter(match => match.status === filter);
    console.log('Филтрирани мачове:', filteredMatches.length);
  }
  
  // Сортираме по дата (най-новите първо)
  filteredMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  if (filteredMatches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: #666;">
        <i class="fas fa-calendar-times" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Няма мачове за показване с този филтър.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filteredMatches.map(match => createMatchCard(match)).join('');
  
  // Добавяме event listeners за детайлите
  container.querySelectorAll('.match-details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const matchId = parseInt(e.target.dataset.matchId);
      const match = matches.find(m => m.id === matchId);
      if (match) {
        showMatchModal(match);
      }
    });
  });
}

function createMatchCard(match) {
  const matchDate = new Date(match.date);
  const formattedDate = matchDate.toLocaleDateString('bg-BG', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  
  const statusClass = match.status;
  const statusText = {
    'upcoming': 'Предстоящ',
    'finished': 'Завършен',
    'live': 'На живо'
  };
  
  let scoreDisplay = '';
  if (match.status === 'finished' && match.result) {
    const homeScore = match.isHome ? match.result.home : match.result.away;
    const awayScore = match.isHome ? match.result.away : match.result.home;
    scoreDisplay = `
      <div class="score">${homeScore} : ${awayScore}</div>
    `;
  } else if (match.status === 'upcoming') {
    scoreDisplay = `
      <div class="vs">VS</div>
    `;
  }
  
  return `
    <div class="match-card ${statusClass}">
      <div class="match-header">
        <div class="match-date">
          <i class="fas fa-calendar"></i>
          ${formattedDate} ${match.time}
        </div>
        <div class="match-status ${statusClass}">
          ${statusText[match.status]}
        </div>
      </div>
      
      <div class="match-teams">
        <div class="team">
          <div class="team-logo">BU</div>
          <div class="team-name">Bankers United</div>
        </div>
        
        <div class="vs-score">
          ${scoreDisplay}
        </div>
        
        <div class="team">
          <div class="team-logo">${getTeamInitials(match.opponent)}</div>
          <div class="team-name">${match.opponent}</div>
        </div>
      </div>
      
      <div class="match-info">
        <div class="match-venue">
          <i class="fas fa-map-marker-alt"></i>
          ${match.venue}
        </div>
        <button class="match-details-btn" data-match-id="${match.id}">
          <i class="fas fa-info-circle"></i>
          Детайли
        </button>
      </div>
    </div>
  `;
}

function getTeamInitials(teamName) {
  return teamName
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
}

function setupMatchFilters(matches) {
  console.log('Настройване на филтри за', matches.length, 'мача');
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Филтър кликнат:', button.dataset.filter);
      
      // Премахваме active класа от всички бутони
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Добавяме active към кликнатия бутон
      button.classList.add('active');
      
      // Филтрираме мачовете
      const filter = button.dataset.filter;
      displayMatches(matches, filter);
    });
  });
}

function setupMatchModal() {
  const modal = document.getElementById('match-modal');
  const closeBtn = document.querySelector('.close-match-modal');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Escape key за затваряне
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

function showMatchModal(match) {
  const modal = document.getElementById('match-modal');
  
  // Попълваме основната информация
  document.getElementById('modal-home-team').textContent = match.homeTeam;
  document.getElementById('modal-away-team').textContent = match.awayTeam;
  
  if (match.result) {
    document.getElementById('modal-home-score').textContent = match.result.home;
    document.getElementById('modal-away-score').textContent = match.result.away;
  } else {
    document.getElementById('modal-home-score').textContent = '-';
    document.getElementById('modal-away-score').textContent = '-';
  }
  
  const matchDate = new Date(match.date);
  const formattedDate = matchDate.toLocaleDateString('bg-BG', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  document.getElementById('modal-date').textContent = `${formattedDate}, ${match.time}`;
  document.getElementById('modal-venue').textContent = match.venue;
  document.getElementById('modal-competition').textContent = match.competition;
  
  // Създаваме секциите с голове и картони
  const eventsContainer = document.getElementById('match-events');
  let eventsHTML = '';
  
  if (match.goals && match.goals.length > 0) {
    eventsHTML += `
      <div class="events-section">
        <h4><i class="fas fa-futbol"></i> Голове</h4>
        ${match.goals.map(goal => `
          <div class="event-item">
            <div class="event-minute">${goal.minute}'</div>
            <div class="event-icon goal">⚽</div>
            <div class="event-description">
              <span class="event-player">${goal.playerName}</span>
              <span class="event-team">(${goal.team === 'home' ? match.homeTeam : match.awayTeam})</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  if (match.cards && match.cards.length > 0) {
    eventsHTML += `
      <div class="events-section">
        <h4><i class="fas fa-square"></i> Картони</h4>
        ${match.cards.map(card => `
          <div class="event-item">
            <div class="event-minute">${card.minute}'</div>
            <div class="event-icon ${card.type}-card">
              ${card.type === 'yellow' ? '🟨' : '🟥'}
            </div>
            <div class="event-description">
              <span class="event-player">${card.playerName}</span>
              <span class="event-team">(${card.team === 'home' ? match.homeTeam : match.awayTeam})</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  if (!eventsHTML && match.status === 'upcoming') {
    eventsHTML = `
      <div class="events-section">
        <p style="text-align: center; color: #666; padding: 2rem;">
          <i class="fas fa-clock"></i><br>
          Мачът все още не е започнал
        </p>
      </div>
    `;
  } else if (!eventsHTML) {
    eventsHTML = `
      <div class="events-section">
        <p style="text-align: center; color: #666; padding: 2rem;">
          <i class="fas fa-info-circle"></i><br>
          Няма налична подробна информация за този мач
        </p>
      </div>
    `;
  }
  
  eventsContainer.innerHTML = eventsHTML;
  
  // Показваме модала
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Добавете този код в края на script.js

// Функционалност за статистики на играчи
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('statistics.html') || document.getElementById('stats-table')) {
    initializeStatisticsPage();
  }
});

let allPlayersData = [];
let currentSort = { column: 'goals', direction: 'desc' };

async function initializeStatisticsPage() {
  console.log('Инициализиране на страницата със статистики...');
  
  try {
    // Зареждаме данните за играчите
    const response = await fetch('player-stats.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    allPlayersData = data.players;
    console.log('Player stats loaded:', allPlayersData);
    
    // Инициализираме компонентите
    updateTopPerformers(allPlayersData);
    displayPlayersTable(allPlayersData);
    setupStatisticsFilters();
    setupStatisticsModal();
    setupTableSorting();
    
  } catch (error) {
    console.error('Грешка при зареждането на статистиките:', error);
    showStatisticsError();
  }
}

function showStatisticsError() {
  document.getElementById('stats-table-body').innerHTML = `
    <tr>
      <td colspan="9" class="loading-row">
        <div style="text-align: center; padding: 2rem; color: #721c24;">
          <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
          <p>Грешка при зареждането на статистиките</p>
          <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Опитай отново
          </button>
        </div>
      </td>
    </tr>
  `;
  
  // Показваме примерни данни
  showSampleStatistics();
}

function showSampleStatistics() {
  const sampleData = [
    {
      id: 1,
      name: "Иван Петров",
      position: "Нападател",
      number: 7,
      photo: "images/gervinho.jpg",
      stats: {
        matches: 3,
        goals: 3,
        assists: 1,
        yellowCards: 1,
        redCards: 0,
        averageRating: 8.2
      },
      recentForm: [
        {result: "W", rating: 8.5},
        {result: "W", rating: 8.7},
        {result: "D", rating: 7.5}
      ]
    },
    {
      id: 2,
      name: "Георги Стоев",
      position: "Полузащитник",
      number: 10,
      photo: "images/yayasanogo.jpg",
      stats: {
        matches: 3,
        goals: 3,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
        averageRating: 8.5
      },
      recentForm: [
        {result: "W", rating: 8.0},
        {result: "W", rating: 9.0},
        {result: "D", rating: 8.5}
      ]
    },
    {
      id: 3,
      name: "Страхил Стоев",
      position: "Защитник",
      number: 4,
      photo: "images/lansbery.jpg",
      stats: {
        matches: 3,
        goals: 0,
        assists: 0,
        yellowCards: 2,
        redCards: 0,
        averageRating: 7.2
      },
      recentForm: [
        {result: "W", rating: 7.5},
        {result: "W", rating: 7.0},
        {result: "D", rating: 7.0}
      ]
    },
    {
      id: 4,
      name: "Мартин Иванов",
      position: "Вратар",
      number: 1,
      photo: "images/gervinho.jpg",
      stats: {
        matches: 3,
        goals: 0,
        assists: 0,
        yellowCards: 1,
        redCards: 0,
        averageRating: 7.8,
        cleanSheets: 1,
        saves: 8
      },
      recentForm: [
        {result: "W", rating: 7.5},
        {result: "W", rating: 8.5},
        {result: "D", rating: 7.5}
      ]
    },
    {
      id: 5,
      name: "Петър Георгиев",
      position: "Защитник",
      number: 3,
      photo: "images/yayasanogo.jpg",
      stats: {
        matches: 3,
        goals: 1,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
        averageRating: 7.6,
        cleanSheets: 1
      },
      recentForm: [
        {result: "W", rating: 7.0},
        {result: "W", rating: 8.5},
        {result: "D", rating: 7.5}
      ]
    }
  ];
  
  allPlayersData = sampleData;
  updateTopPerformers(sampleData);
  displayPlayersTable(sampleData);
}

function updateTopPerformers(players) {
  // Най-добър голмайстор
  const topScorer = players.reduce((prev, current) => 
    (prev.stats.goals > current.stats.goals) ? prev : current
  );
  
  document.getElementById('top-scorer').innerHTML = `
    <div class="top-player-info">
      <img src="${topScorer.photo}" alt="${topScorer.name}" class="top-player-photo">
      <div class="top-player-details">
        <div class="top-player-name">${topScorer.name}</div>
        <div class="top-player-position">${topScorer.position}</div>
      </div>
      <div class="top-stat-value">${topScorer.stats.goals}</div>
    </div>
  `;
  
  // Най-добър асистент
  const topAssister = players.reduce((prev, current) => 
    (prev.stats.assists > current.stats.assists) ? prev : current
  );
  
  document.getElementById('top-assister').innerHTML = `
    <div class="top-player-info">
      <img src="${topAssister.photo}" alt="${topAssister.name}" class="top-player-photo">
      <div class="top-player-details">
        <div class="top-player-name">${topAssister.name}</div>
        <div class="top-player-position">${topAssister.position}</div>
      </div>
      <div class="top-stat-value">${topAssister.stats.assists}</div>
    </div>
  `;
  
  // Най-висок рейтинг
  const topRated = players.reduce((prev, current) => 
    (prev.stats.averageRating > current.stats.averageRating) ? prev : current
  );
  
  document.getElementById('top-rated').innerHTML = `
    <div class="top-player-info">
      <img src="${topRated.photo}" alt="${topRated.name}" class="top-player-photo">
      <div class="top-player-details">
        <div class="top-player-name">${topRated.name}</div>
        <div class="top-player-position">${topRated.position}</div>
      </div>
      <div class="top-stat-value">${topRated.stats.averageRating.toFixed(1)}</div>
    </div>
  `;
  
  // Най-много чисти мрежи (за вратари и защитници)
  const cleanSheetPlayers = players.filter(p => p.stats.cleanSheets !== undefined);
  const topCleanSheets = cleanSheetPlayers.length > 0 
    ? cleanSheetPlayers.reduce((prev, current) => 
        (prev.stats.cleanSheets > current.stats.cleanSheets) ? prev : current
      )
    : players[0]; // fallback
  
  document.getElementById('top-clean-sheets').innerHTML = `
    <div class="top-player-info">
      <img src="${topCleanSheets.photo}" alt="${topCleanSheets.name}" class="top-player-photo">
      <div class="top-player-details">
        <div class="top-player-name">${topCleanSheets.name}</div>
        <div class="top-player-position">${topCleanSheets.position}</div>
      </div>
      <div class="top-stat-value">${topCleanSheets.stats.cleanSheets || 0}</div>
    </div>
  `;
}

function displayPlayersTable(players, sortBy = null) {
  const tbody = document.getElementById('stats-table-body');
  
  // Сортиране ако е необходимо
  let sortedPlayers = [...players];
  if (sortBy || currentSort.column) {
    const column = sortBy || currentSort.column;
    const direction = currentSort.direction;
    
    sortedPlayers.sort((a, b) => {
      let aValue, bValue;
      
      if (column === 'name') {
        aValue = a.name;
        bValue = b.name;
      } else if (column === 'position') {
        aValue = a.position;
        bValue = b.position;
      } else if (column === 'cards') {
        aValue = a.stats.yellowCards + a.stats.redCards;
        bValue = b.stats.yellowCards + b.stats.redCards;
      } else {
        aValue = a.stats[column] || 0;
        bValue = b.stats[column] || 0;
      }
      
      if (typeof aValue === 'string') {
        return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }
  
  tbody.innerHTML = sortedPlayers.map(player => createPlayerRow(player)).join('');
  
  // Добавяме event listeners за детайлите
  tbody.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const playerId = parseInt(e.target.dataset.playerId);
      const player = players.find(p => p.id === playerId);
      if (player) {
        showPlayerStatsModal(player);
      }
    });
  });
}

function createPlayerRow(player) {
  const formIndicators = player.recentForm ? 
    player.recentForm.map(match => 
      `<div class="form-match ${match.result.toLowerCase()}">${match.result}</div>`
    ).join('') : '';
  
  return `
    <tr>
      <td>
        <div class="player-cell">
          <img src="${player.photo}" alt="${player.name}" class="player-avatar">
          <div class="player-info">
            <div class="player-name">${player.name}</div>
            <div class="player-number">#${player.number}</div>
          </div>
        </div>
      </td>
      <td>${player.position}</td>
      <td><span class="stat-value">${player.stats.matches}</span></td>
      <td><span class="stat-value">${player.stats.goals}</span></td>
      <td><span class="stat-value">${player.stats.assists}</span></td>
      <td><span class="stat-value">${player.stats.averageRating.toFixed(1)}</span></td>
      <td>
        <div class="cards-cell">
          <div class="card-count yellow">
            🟨 ${player.stats.yellowCards}
          </div>
          <div class="card-count red">
            🟥 ${player.stats.redCards}
          </div>
        </div>
      </td>
      <td>
        <div class="form-indicators">
          ${formIndicators}
        </div>
      </td>
      <td>
        <button class="details-btn" data-player-id="${player.id}">
          <i class="fas fa-info-circle"></i>
          Детайли
        </button>
      </td>
    </tr>
  `;
}

function setupStatisticsFilters() {
  const filterButtons = document.querySelectorAll('.stat-filter-btn');
  const sortSelect = document.getElementById('sort-select');
  
  // Филтри по позиция
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const position = button.dataset.position;
      let filteredPlayers = allPlayersData;
      
      if (position !== 'all') {
        filteredPlayers = allPlayersData.filter(player => player.position === position);
      }
      
      displayPlayersTable(filteredPlayers);
    });
  });
  
  // Сортиране
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort.column = e.target.value;
      currentSort.direction = 'desc';
      displayPlayersTable(allPlayersData, currentSort.column);
      updateSortIndicators();
    });
  }
}

function setupTableSorting() {
  const sortableHeaders = document.querySelectorAll('.sortable');
  
  sortableHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const column = header.dataset.column;
      
      if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = column;
        currentSort.direction = 'desc';
      }
      
      displayPlayersTable(allPlayersData, column);
      updateSortIndicators();
    });
  });
}

function updateSortIndicators() {
  const sortableHeaders = document.querySelectorAll('.sortable');
  
  sortableHeaders.forEach(header => {
    const icon = header.querySelector('.sort-icon');
    icon.className = 'sort-icon';
    
    if (header.dataset.column === currentSort.column) {
      icon.classList.add(currentSort.direction);
    }
  });
}

function setupStatisticsModal() {
  const modal = document.getElementById('player-stats-modal');
  const closeBtn = document.querySelector('.close-stats-modal');
  const tabButtons = document.querySelectorAll('.stats-tab-btn');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Табове
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Премахваме active от всички табове и панели
      tabButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      
      // Активираме избрания таб и панел
      button.classList.add('active');
      document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
  });
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

function showPlayerStatsModal(player) {
  const modal = document.getElementById('player-stats-modal');
  
  // Попълваме основната информация
  document.getElementById('modal-player-photo').src = player.photo;
  document.getElementById('modal-player-photo').alt = player.name;
  document.getElementById('modal-player-name').textContent = player.name;
  document.getElementById('modal-player-position').textContent = player.position;
  document.getElementById('modal-player-number').textContent = `#${player.number}`;
  
  // Създаваме статистиките
  const statsGrid = document.getElementById('modal-stats-grid');
  statsGrid.innerHTML = `
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.matches}</div>
      <div class="stat-item-label">Мачове</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.goals}</div>
      <div class="stat-item-label">Голове</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.assists}</div>
      <div class="stat-item-label">Асистенции</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.averageRating.toFixed(1)}</div>
      <div class="stat-item-label">Среден рейтинг</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.minutesPlayed || 0}</div>
      <div class="stat-item-label">Минути</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${player.stats.passAccuracy ? player.stats.passAccuracy.toFixed(1) + '%' : 'N/A'}</div>
      <div class="stat-item-label">Точност на пасове</div>
    </div>
    ${player.stats.saves !== undefined ? `
      <div class="stat-item">
        <div class="stat-item-value">${player.stats.saves}</div>
        <div class="stat-item-label">Спасени удари</div>
      </div>
    ` : ''}
    ${player.stats.cleanSheets !== undefined ? `
      <div class="stat-item">
        <div class="stat-item-value">${player.stats.cleanSheets}</div>
        <div class="stat-item-label">Чисти мрежи</div>
      </div>
    ` : ''}
  `;
  
  // Последни мачове
  const recentMatches = document.getElementById('modal-recent-matches');
  if (player.recentForm && player.recentForm.length > 0) {
    recentMatches.innerHTML = player.recentForm.map((match, index) => `
      <div class="recent-match">
        <div>
          <div class="match-opponent">Мач ${index + 1}</div>
          <div class="form-match ${match.result.toLowerCase()}">${match.result}</div>
        </div>
        <div class="match-rating">${match.rating}</div>
      </div>
    `).join('');
  } else {
    recentMatches.innerHTML = `
      <p style="text-align: center; color: #666; padding: 2rem;">
        Няма данни за последните мачове
      </p>
    `;
  }
  
  // Показваме модала
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}