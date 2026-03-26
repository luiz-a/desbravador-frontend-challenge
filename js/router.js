import { Home } from './pages/Home.js';
import { Profile } from './pages/Profile.js';

const routes = {
    '#/': Home,
    '#/user/': Profile
};

const toggleNavbar = (hash) => {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;

    if (hash === '#/' || hash === '') {
        navbar.classList.add('d-none');
    } else {
        navbar.classList.remove('d-none');
    }
};

export const handleRoute = async () => {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#/';

    toggleNavbar(hash);
    
    app.innerHTML = '<div class="text-center mt-5"><div class="spinner-border text-primary"></div></div>';

    if (hash.startsWith('#/user/')) {
        const username = hash.replace('#/user/', '');
        await Profile(username);
    } else {
        const component = routes[hash] || routes['#/'];
        await component();
    }
};