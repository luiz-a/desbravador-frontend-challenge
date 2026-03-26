import { getGitHubUser, getUserRepos } from './api.js';
import { UserCard } from './components/UserCard.js';
import { handleRoute } from './router.js';
import { SortControl } from './components/SortControl.js';

let currentRepos = [];
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

const app = document.getElementById('app');
const searchBtn = document.getElementById('searchBtn');
const usernameInput = document.getElementById('usernameInput');
let _repos = [];

export const RepoStore = {
    setRepos(repos) {
        _repos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    },

    toggleStars() {
        const container = document.getElementById('repos-list');
        const btn = document.getElementById('btnSortStars');
        const icon = document.getElementById('sortIcon');
        
        if (!container || !btn) return;

        const currentOrder = btn.getAttribute('data-order');
        const newOrder = currentOrder === 'desc' ? 'asc' : 'desc';

        _repos.sort((a, b) => {
            return newOrder === 'desc' 
                ? b.stargazers_count - a.stargazers_count 
                : a.stargazers_count - b.stargazers_count;
        });

        btn.setAttribute('data-order', newOrder);
        icon.className = newOrder === 'desc' ? 'bi bi-arrow-down' : 'bi bi-arrow-up';

        container.style.opacity = '0';
        setTimeout(() => {
            container.innerHTML = renderRepoList(_repos);
            container.style.opacity = '1';
        }, 150);
    }
};

searchBtn.addEventListener('click', () => {
    const user = usernameInput.value.trim();
    if (user) {
        window.location.hash = `#/user/${user}`;
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('#btnSortStars')) {
        RepoStore.toggleStars();
    }
});

usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

export const setCurrentRepos = (repos) => {
    currentRepos = [...repos];
};

export const renderUserProfile = async (username) => {
    app.innerHTML = `<div class="text-center mt-5"><div class="spinner-border text-primary"></div></div>`;

    try {
        const userData = await getGitHubUser(username);
        const repos = await getUserRepos(username);

        repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        RepoStore.setRepos(repos);
        app.innerHTML = `... renderização ...`;
        
        currentRepos = repos; 

        app.innerHTML = `
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        ${UserCard(userData)}
                    </div>
                    <div class="col-md-8">
                        <div class="card p-3 shadow-sm border-0">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="mb-0">Repositórios</h5>
                                ${SortControl()} 
                            </div>
                            <div id="repos-list" class="list-group list-group-flush">
                                ${renderRepoList(repos)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        app.innerHTML = `
            <div class="container text-center mt-5">
                <div class="alert alert-danger shadow-sm">
                    Usuário <strong>${username}</strong> não encontrado.
                </div>
            </div>
        `;
    }
};

const renderRepoList = (repos) => {
    if (!repos || repos.length === 0) {
        return `
            <div class="text-center py-5">
                <i class="bi bi-folder-x display-4 text-muted"></i>
                <p class="text-muted mt-2">Nenhum repositório público encontrado.</p>
            </div>
        `;
    }

    return repos.map(repo => {
        const langColors = {
            JavaScript: '#f1e05a',
            TypeScript: '#3178c6',
            HTML: '#e34c26',
            CSS: '#563d7c',
            Python: '#3572A5',
            Vue: '#41b883',
            React: '#61dafb'
        };
        const color = langColors[repo.language] || '#6e7681';

        return `
            <a href="${repo.html_url}" target="_blank" 
               class="list-group-item list-group-item-action py-4 px-4 border-start-0 border-end-0 repo-item">
                
                <div class="d-flex w-100 justify-content-between align-items-start mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <i class="bi bi-journal-bookmark text-secondary"></i>
                        <h6 class="mb-0 text-primary fw-bold fs-5">${repo.name}</h6>
                        <span class="badge rounded-pill border text-muted fw-normal small" style="font-size: 0.7rem;">
                            ${repo.visibility || 'Public'}
                        </span>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <span class="text-muted small">
                            <i class="bi bi-star me-1"></i>${repo.stargazers_count}
                        </span>
                    </div>
                </div>

                <p class="mb-3 text-secondary small text-truncate-2" style="max-width: 90%;">
                    ${repo.description || '<i>Sem descrição disponível para este projeto.</i>'}
                </p>

                <div class="d-flex align-items-center gap-4 mt-2">
                    <div class="d-flex align-items-center">
                        <span class="d-inline-block rounded-circle me-2" 
                              style="width: 12px; height: 12px; background-color: ${color};"></span>
                        <span class="text-muted small">${repo.language || 'Geral'}</span>
                    </div>
                    
                    <div class="text-muted small">
                        <i class="bi bi-clock me-1"></i>
                        Atualizado em ${new Date(repo.updated_at).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                    </div>
                </div>
            </a>
        `;
    }).join('');
};

export { renderRepoList };