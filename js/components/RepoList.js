export const renderRepoList = (repos) => {
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
            <a href="#/repo/${repo.full_name}" 
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