import { getGitHubUser, getUserRepos } from '../api.js';
import { UserCard } from '../components/UserCard.js';
import { SortControl } from '../components/SortControl.js';
import { setCurrentRepos, renderRepoList } from '../app.js';
import { RepoStore } from '../app.js';

export const Profile = async (username) => {
    const app = document.getElementById('app');
    const repos = await getUserRepos(username);

    RepoStore.setRepos(repos);
    
    app.innerHTML = `
        <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-primary" role="status"></div>
        </div>
    `;

    try {
        const user = await getGitHubUser(username);
        const repos = await getUserRepos(username);
        
        setCurrentRepos(repos);

        app.innerHTML = `
            <div class="container mt-4 pb-5">
                <div class="row g-4"> <div class="col-12 col-md-4 col-lg-3">
                        ${UserCard(user)}
                    </div>
                    
                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="card shadow-sm border-0 overflow-hidden">
                            <div class="card-header bg-white border-0 pt-4 px-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                                <h5 class="fw-bold mb-0">Repositórios</h5>
                                ${SortControl()}
                            </div>
                            
                            <div class="card-body p-0"> <div id="repos-list" class="list-group list-group-flush">
                                    ${renderRepoList(repos)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
    } catch (error) {
        console.error(error);
        app.innerHTML = `
            <div class="container mt-5 text-center">
                <div class="alert alert-warning shadow-sm">
                    <i class="bi bi-exclamation-triangle-fill me-2"></i>
                    Usuário <strong>${username}</strong> não encontrado ou erro na API.
                </div>
                <a href="#/" class="btn btn-primary mt-3">Voltar para a Home</a>
            </div>
        `;
    }
};