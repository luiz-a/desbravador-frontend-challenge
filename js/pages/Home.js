export const Home = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div class="row justify-content-center w-100 p-3">
                <div class="col-12 col-md-10 col-lg-7 text-center">
                    
                    <div class="mb-5 text-dark">
                        <i class="bi bi-github mb-3 d-block display-1 fs-1 fs-sm-display-1" style="opacity: 0.9;"></i>
                        <h1 class="display-3 fw-bold mb-3">Dev<span class="text-primary">Finder</span></h1>
                        <p class="lead text-muted mx-auto" style="max-width: 500px;">Explore perfis e repositórios do GitHub de forma simples e rápida.</p>
                    </div>

                    <div class="search-wrapper mx-auto" style="max-width: 600px;">
                        
                        <div class="d-flex flex-column flex-sm-row gap-2 gap-sm-0 shadow-lg p-2 p-sm-1 bg-white rounded-4 rounded-pill-sm">
                            
                            <div class="input-group input-group-lg flex-grow-1 border-0">
                                <span class="input-group-text bg-transparent border-0 pe-0 d-none d-sm-flex">
                                    <i class="bi bi-search text-muted"></i>
                                </span>
                                <input 
                                    type="text" 
                                    id="homeSearchInput" 
                                    class="form-control border-0 py-3 ps-3 ps-sm-2 text-dark rounded-pill" 
                                    placeholder="Digite o nome do usuário..."
                                    style="box-shadow: none; font-size: 1.1rem;"
                                >
                            </div>

                            <div class="d-grid gap-2 d-sm-flex ps-sm-2">
                                <button 
                                    class="btn btn-primary btn-lg px-4 fw-bold rounded-pill text-nowrap" 
                                    type="button" 
                                    id="homeSearchBtn"
                                >
                                    <i class="bi bi-search text-white me-2 d-sm-none"></i>
                                    <span>Buscar</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    setupHomeEvents();
};

const setupHomeEvents = () => {
    const input = document.getElementById('homeSearchInput');
    const btn = document.getElementById('homeSearchBtn');

    if (!input || !btn) return;

    const handleSearch = () => {
        const user = input.value?.trim();
        if (user) {
            // EncodeURIComponent é vital para nomes com caracteres especiais
            window.location.hash = `#/user/${encodeURIComponent(user)}`;
        } else {
            input.classList.add('is-invalid');
            setTimeout(() => input.classList.remove('is-invalid'), 2000);
        }
    };

    btn.addEventListener('click', handleSearch);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    input.addEventListener('input', () => input.classList.remove('is-invalid'));
};