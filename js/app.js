import { handleRoute } from './router.js';

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

const searchBtn = document.getElementById('searchBtn');
const usernameInput = document.getElementById('usernameInput');

searchBtn?.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    if (user) {
        window.location.hash = `#/user/${user}`;
    }
});

usernameInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});