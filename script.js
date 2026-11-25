document.documentElement.classList.add('js');

const videos = [
  { id: 'promo-medley', category: 'promo', title: 'Попурри', duration: '0:56', orientation: 'landscape', description: 'Промо Знакомые мелодии' },
  { id: 'event-08', category: 'promo', title: 'Конь (с гостями)', duration: '0:38', orientation: 'portrait', description: 'Промо Караоке' },
  { id: 'promo-leps', category: 'promo', title: 'Рюмка водки', duration: '1:10', orientation: 'landscape', description: 'Кавер Григорий Лепс' },
  { id: 'event-leps', category: 'events', title: 'Рюмка водки', duration: '1:24', orientation: 'landscape', description: 'Караоке Григорий Лепс' },
  { id: 'event-11', category: 'events', title: 'WWW Ленинград', duration: '0:58', orientation: 'portrait', description: 'Караоке «Ленинград»' },
  { id: 'event-12', category: 'events', title: '«Ром» (1)', duration: '0:16', orientation: 'portrait', description: 'Караоке Король и Шут' },
  { id: 'event-13', category: 'events', title: '«Ром» (2)', duration: '0:36', orientation: 'portrait', description: 'Караоке Король и Шут' },
  { id: 'tiktok-02', category: 'tiktok', title: 'Знаешь ли ты', duration: '1:16', orientation: 'portrait', description: 'Кавер МакSим' },
  { id: 'tiktok-03', category: 'tiktok', title: 'Песенка про зайцев', duration: '1:24', orientation: 'portrait', description: 'Кавер Юрий Никулин' },
  { id: 'tiktok-05', category: 'tiktok', title: 'Тополиный пух', duration: '1:13', orientation: 'portrait', description: 'Кавер Иванушки International' },
  { id: 'tiktok-07', category: 'tiktok', title: 'От винта', duration: '0:38', orientation: 'portrait', description: 'Кавер Смешарики' },
  { id: 'tiktok-newyear-09', category: 'tiktok', title: 'Три белых коня', duration: '1:02', orientation: 'portrait', description: 'Кавер Новогодняя программа' },
  { id: 'tiktok-newyear-10', category: 'tiktok', title: 'Разговор со счастьем', duration: '1:04', orientation: 'portrait', description: 'Кавер Новогодняя программа' },
  { id: 'tiktok-04', category: 'tiktok', title: 'Самолёты', duration: '1:12', orientation: 'portrait', description: 'Кавер Женя Трофимов' },
  { id: 'tiktok-01', category: 'tiktok', title: 'Ветер с моря дул + Батарейка', duration: '1:06', orientation: 'portrait', description: 'Кавер Натали и Жуки' },
  { id: 'tiktok-06', category: 'tiktok', title: 'Я свободен', duration: '1:26', orientation: 'portrait', description: 'Кавер Кипелов' },
  { id: 'artist-14', category: 'artists', title: 'На сцене 01', duration: '0:34', orientation: 'portrait', description: 'Концерт Работа с артистом' },
  { id: 'artist-15', category: 'artists', title: 'На сцене 02', duration: '0:52', orientation: 'portrait', description: 'Концерт Работа с артистом' },
  { id: 'artist-16', category: 'artists', title: 'На сцене 03', duration: '1:12', orientation: 'portrait', description: 'Концерт Работа с артистом' },
  { id: 'artist-17', category: 'artists', title: 'На сцене 04', duration: '0:37', orientation: 'portrait', description: 'Концерт Работа с артистом' }
];

const categoryNames = {
  promo: 'Промо',
  events: 'События и караоке',
  tiktok: 'TikTok',
  artists: 'С артистами'
};

const photos = [
  { src: 'assets/images/full/portrait-seated.jpg', alt: 'Никита сидит за фортепиано', caption: 'На винной дегустации' },
  { src: 'assets/images/full/stage-front.jpg', alt: 'Никита на сцене за красным синтезатором', caption: 'Москва - МДМ' },
  { src: 'assets/images/full/piano-lights.jpg', alt: 'Никита играет на фортепиано в тёплом свете гирлянд', caption: 'Репетиция' },
  { src: 'assets/images/full/stage-white.jpg', alt: 'Никита за клавишными Nord Stage на сцене', caption: 'Алтай - Концерт под открытым небом' },
  { src: 'assets/images/full/stage-keys.jpg', alt: 'Никита играет на красных клавишных Nord', caption: 'На сцене' },
  { src: 'assets/images/full/stage-back.jpg', alt: 'Вид на Никиту за клавишными со стороны сцены', caption: 'На сцене' },
  { src: 'assets/images/full/steinway-portrait.png', alt: 'Портрет Никиты за чёрным роялем', caption: 'Москва - Малый зал МГК' },
  { src: 'assets/images/full/festival-close.jpg', alt: 'Никита за клавишными Nord на фестивальном концерте', caption: 'Сочи - КЗ "Фестивальный"' },
  { src: 'assets/images/full/steinway-hall.jpg', alt: 'Никита за роялем Steinway в концертном зале', caption: 'Москва - Рахманиновский зал МГК' }
];

const header = document.querySelector('[data-header]');
const videoGrid = document.querySelector('#video-grid');
const tabs = [...document.querySelectorAll('[data-category]')];
const playerDialog = document.querySelector('#player-dialog');
const player = document.querySelector('#video-player');
const playerTitle = document.querySelector('#player-title');
const playerCategory = document.querySelector('#player-category');
const playerDescription = document.querySelector('#player-description');
const playerCounter = document.querySelector('#player-counter');
const photoDialog = document.querySelector('#photo-dialog');
const photoFull = document.querySelector('#photo-full');
const photoCaption = document.querySelector('#photo-caption');
const photoCounter = document.querySelector('#photo-counter');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let currentCategory = 'promo';
let currentVideos = [];
let currentVideoIndex = 0;
let currentPhotoIndex = 0;
let lastPlayerTrigger = null;
let lastPhotoTrigger = null;

const playIcon = '<span class="play-badge" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m6 4 9 6-9 6V4Z"/></svg></span>';

function renderVideos() {
  currentVideos = videos.filter(video => video.category === currentCategory);
  const layoutClass = currentCategory === 'promo'
    ? ' landscape-layout'
    : currentCategory === 'events'
      ? ' events-layout'
      : '';
  videoGrid.className = `video-grid${layoutClass}`;
  videoGrid.setAttribute('aria-label', categoryNames[currentCategory]);
  videoGrid.innerHTML = currentVideos.map(video => `
    <button class="video-card ${video.orientation === 'landscape' ? 'landscape-card' : ''}" type="button" data-video-id="${video.id}" aria-label="Смотреть: ${video.title}">
      <span class="video-poster">
        <img src="assets/posters/${video.id}.webp" alt="" width="${video.orientation === 'landscape' ? 1280 : 720}" height="${video.orientation === 'landscape' ? 720 : 1280}" loading="lazy" decoding="async">
        ${playIcon}
        <span class="video-duration">${video.duration}</span>
      </span>
      <span class="video-card-meta">
        <span class="video-card-title">${video.title}</span>
        <span class="video-card-desc">${video.description}</span>
      </span>
    </button>
  `).join('');

  if (!reduceMotion && videoGrid.animate) {
    videoGrid.animate(
      [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 260, easing: 'ease-out' }
    );
  }
}

function selectCategory(category, focusTab = false) {
  if (!categoryNames[category]) return;
  currentCategory = category;
  tabs.forEach(tab => {
    const selected = tab.dataset.category === category;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) tab.focus();
  });
  renderVideos();
}

function updatePlayer() {
  const video = currentVideos[currentVideoIndex];
  if (!video) return;
  player.src = `assets/videos/${video.id}.mp4`;
  player.poster = `assets/posters/${video.id}.webp`;
  playerTitle.textContent = video.title;
  playerCategory.textContent = categoryNames[video.category];
  playerDescription.textContent = video.description;
  playerCounter.textContent = `${String(currentVideoIndex + 1).padStart(2, '0')} / ${String(currentVideos.length).padStart(2, '0')}`;
  player.load();
  player.play().catch(() => {});
}

function openPlayer(videoId, trigger) {
  const index = currentVideos.findIndex(video => video.id === videoId);
  if (index < 0) return;
  currentVideoIndex = index;
  lastPlayerTrigger = trigger;
  updatePlayer();
  if (!playerDialog.open) playerDialog.showModal();
  document.body.classList.add('dialog-open');
}

function stepVideo(direction) {
  const nextIndex = currentVideoIndex + direction;
  if (nextIndex >= 0 && nextIndex < currentVideos.length) {
    currentVideoIndex = nextIndex;
    updatePlayer();
    return;
  }

  const categories = tabs.map(tab => tab.dataset.category);
  const currentCatIndex = categories.indexOf(currentCategory);
  if (currentCatIndex < 0 || !categories.length) return;

  const stepCat = direction > 0 ? 1 : -1;
  const nextCatIndex = (currentCatIndex + stepCat + categories.length) % categories.length;
  selectCategory(categories[nextCatIndex]);
  if (!currentVideos.length) return;

  currentVideoIndex = direction > 0 ? 0 : currentVideos.length - 1;
  const activeVideo = currentVideos[currentVideoIndex];
  if (activeVideo) {
    lastPlayerTrigger = videoGrid.querySelector(`[data-video-id="${activeVideo.id}"]`);
  }
  updatePlayer();
}

function closePlayer() {
  if (playerDialog.open) playerDialog.close();
}

function updatePhoto() {
  const photo = photos[currentPhotoIndex];
  photoFull.src = photo.src;
  photoFull.alt = photo.alt;
  photoCaption.textContent = photo.caption;
  photoCounter.textContent = `${String(currentPhotoIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;

  const nextPhoto = photos[(currentPhotoIndex + 1) % photos.length];
  const preload = new Image();
  preload.src = nextPhoto.src;
}

function openPhoto(index, trigger) {
  currentPhotoIndex = index;
  lastPhotoTrigger = trigger;
  updatePhoto();
  photoDialog.showModal();
  document.body.classList.add('dialog-open');
}

function stepPhoto(direction) {
  currentPhotoIndex = (currentPhotoIndex + direction + photos.length) % photos.length;
  updatePhoto();
}

function closePhoto() {
  if (photoDialog.open) photoDialog.close();
}

videoGrid.addEventListener('click', event => {
  const card = event.target.closest('[data-video-id]');
  if (card) openPlayer(card.dataset.videoId, card);
});

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCategory(tab.dataset.category));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    selectCategory(tabs[nextIndex].dataset.category, true);
  });
});

document.querySelector('#player-prev').addEventListener('click', () => stepVideo(-1));
document.querySelector('#player-next').addEventListener('click', () => stepVideo(1));
document.querySelector('[data-close-player]').addEventListener('click', closePlayer);
document.querySelector('#photo-prev').addEventListener('click', () => stepPhoto(-1));
document.querySelector('#photo-next').addEventListener('click', () => stepPhoto(1));
document.querySelector('[data-close-photo]').addEventListener('click', closePhoto);

document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => openPhoto(Number(button.dataset.photo), button));
});

playerDialog.addEventListener('click', event => {
  if (event.target === playerDialog) closePlayer();
});
photoDialog.addEventListener('click', event => {
  if (event.target === photoDialog) closePhoto();
});

playerDialog.addEventListener('close', () => {
  player.pause();
  player.removeAttribute('src');
  player.removeAttribute('poster');
  player.load();
  if (!photoDialog.open) document.body.classList.remove('dialog-open');
  lastPlayerTrigger?.focus();
});

photoDialog.addEventListener('close', () => {
  photoFull.removeAttribute('src');
  if (!playerDialog.open) document.body.classList.remove('dialog-open');
  lastPhotoTrigger?.focus();
});

document.addEventListener('keydown', event => {
  if (event.target instanceof HTMLVideoElement) return;
  if (playerDialog.open && event.key === 'ArrowRight') stepVideo(1);
  if (playerDialog.open && event.key === 'ArrowLeft') stepVideo(-1);
  if (photoDialog.open && event.key === 'ArrowRight') stepPhoto(1);
  if (photoDialog.open && event.key === 'ArrowLeft') stepPhoto(-1);
});

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.02, rootMargin: '0px 0px -10px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
}

renderVideos();
