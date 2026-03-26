import { getRepoDetails } from '../api.js';

export const RepoDetail = async (fullName) => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border text-primary" role="status"></div>
        </div>
    `;

    try {
        const repo = await getRepoDetails(fullName);
        
        const createdDate = new Date(repo.created_at).toLocaleDateString('pt-BR');
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('pt-BR');

        app.innerHTML = `
            <div class="container mt-4 pb-5">
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#/" class="text-decoration-none text-muted">Home</a></li>
                        <li class="breadcrumb-item"><a href="#/user/${repo.owner.login}" class="text-decoration-none text-muted">${repo.owner.login}</a></li>
                        <li class="breadcrumb-item active fw-bold text-dark" aria-current="page">${repo.name}</li>
                    </ol>
                </nav>

                <div class="row g-4">
                    <div class="col-lg-8">
                        <div class="card shadow-sm border-0 p-4 mb-4">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="bg-light p-3 rounded-3">
                                    <i class="bi bi-journal-code fs-1 text-primary"></i>
                                </div>
                                <div>
                                    <h1 class="h3 mb-1 fw-bold">${repo.name}</h1>
                                    <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill">
                                        ${repo.visibility.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                            
                            <p class="fs-5 text-secondary mb-4">
                                ${repo.description || '<i>Este repositório não possui uma descrição definida.</i>'}
                            </p>

                            <div class="d-flex flex-wrap gap-2 mb-4">
                                ${repo.topics.map(topic => `
                                    <span class="badge bg-primary-subtle text-primary fw-normal">#${topic}</span>
                                `).join('')}
                            </div>

                            <hr class="text-muted opacity-25">

                            <div class="d-grid d-md-flex gap-3">
                                <a href="${repo.html_url}" target="_blank" class="btn btn-dark btn-lg px-4 fw-bold">
                                    <i class="bi bi-github me-2"></i> Abrir no GitHub
                                </a>
                                ${repo.homepage ? `
                                    <a href="${repo.homepage}" target="_blank" class="btn btn-outline-primary btn-lg px-4 fw-bold">
                                        <i class="bi bi-laptop me-2"></i> Ver Demo / Site
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card shadow-sm border-0 mb-4">
                            <div class="card-body">
                                <h6 class="fw-bold mb-4">Estatísticas</h6>
                                
                                <div class="list-group list-group-flush">
                                    <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <span><i class="bi bi-star me-2"></i>Estrelas</span>
                                        <span class="badge bg-light text-dark border">${repo.stargazers_count}</span>
                                    </div>
                                    <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <span><i class="bi bi-eye me-2"></i>Observadores</span>
                                        <span class="badge bg-light text-dark border">${repo.watchers_count}</span>
                                    </div>
                                    <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <span><i class="bi bi-diagram-2 me-2"></i>Forks</span>
                                        <span class="badge bg-light text-dark border">${repo.forks_count}</span>
                                    </div>
                                    <div class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        <span><i class="bi bi-exclamation-circle me-2"></i>Issues Abertas</span>
                                        <span class="badge bg-light text-dark border">${repo.open_issues_count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card shadow-sm border-0 p-3 bg-light">
                            <div class="small mb-2 text-muted">
                                <i class="bi bi-calendar-check me-2"></i>Criado em: <strong>${createdDate}</strong>
                            </div>
                            <div class="small text-muted">
                                <i class="bi bi-arrow-repeat me-2"></i>Última atualização: <strong>${updatedDate}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        app.innerHTML = `
            <div class="container mt-5 text-center">
                <div class="alert alert-danger shadow-sm">
                    Erro ao carregar os detalhes do repositório <strong>${fullName}</strong>.
                </div>
                <button onclick="history.back()" class="btn btn-primary mt-3">Voltar</button>
            </div>
        `;
    }
};