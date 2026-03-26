export const UserCard = (user) => {
    return `
        <div class="card shadow-sm border-0 overflow-hidden sticky-top" style="top: 20px;">
            <div class="bg-primary" style="height: 80px;"></div>
            
            <div class="card-body text-center mt-n5">
                <img src="${user.avatar_url}" 
                     class="rounded-circle border border-4 border-white shadow-sm mb-3" 
                     alt="${user.name}" 
                     style="width: 120px; height: 120px; margin-top: -60px; object-fit: cover;">
                
                <h4 class="card-title fw-bold mb-0">${user.name || user.login}</h4>
                <p class="text-muted mb-3">@${user.login}</p>
                
                <p class="card-text mb-4 px-2 text-secondary" style="font-size: 0.9rem; min-height: 40px;">
                    ${user.bio || "<i>Sem biografia disponível no GitHub.</i>"}
                </p>

                <div class="d-flex justify-content-center gap-2 mb-4">
                    <div class=" px-3 py-2 bg-primary text-white rounded-pill">
                        <span class="fw-bold">${user.followers}</span> 
                        <span class="text-white small ms-1">Seguidores</span>
                    </div>
                    <div class=" px-3 py-2 bg-dark text-white rounded-pill">
                        <span class="fw-bold">${user.following}</span> 
                        <span class="text-white small ms-1">Seguindo</span>
                    </div>
                </div>

                <div class="text-start border-top pt-3">
                    <div class="d-flex align-items-center mb-2 small">
                        <i class="bi bi-envelope text-primary me-2"></i>
                        <span class="text-truncate">${user.email || 'E-mail privado'}</span>
                    </div>
                </div>

                <div class="mt-4">
                    <a href="${user.html_url}" target="_blank" class="btn btn-outline-primary btn-sm w-100 fw-bold py-2">
                        Ver Perfil no GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
};