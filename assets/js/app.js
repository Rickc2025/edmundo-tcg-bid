const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const countdowns = document.querySelectorAll('[data-countdown]');
const formatCountdown = (targetDate) => {
  const diff = targetDate - new Date();
  if (diff <= 0) return 'Closed';
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;
};

const tickCountdowns = () => {
  countdowns.forEach((element) => {
    const target = element.getAttribute('data-countdown');
    if (!target) return;
    element.textContent = formatCountdown(new Date(target));
  });
};

if (countdowns.length) {
  tickCountdowns();
  setInterval(tickCountdowns, 60000);
}

const filterButtons = document.querySelectorAll('[data-filter]');
const auctionRows = document.querySelectorAll('#auctionList .auction-row');
if (filterButtons.length && auctionRows.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      auctionRows.forEach((row) => {
        const category = row.getAttribute('data-category');
        row.classList.toggle('hidden', !(filter === 'all' || category === filter));
      });
    });
  });
}
