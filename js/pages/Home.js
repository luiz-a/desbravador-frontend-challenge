export const Home = () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="container d-flex align-items-center justify-content-center" style="min-vh: 100vh; height: 90vh;">
            <div class="row justify-content-center w-100">
                <div class="col-md-10 col-lg-8 text-center">
                    
                    <div class="mb-5">
                        <i class="bi bi-github text-dark mb-3 d-block" style="font-size: 5rem;"></i>
                        <h1 class="display-4 fw-bold mb-3">Dev<span class="text-primary">Finder</span></h1>
                    </div>

                    <div class="search-wrapper mx-auto w-100 px-2" style="max-width: 650px;">
                        <div class="d-flex flex-column flex-sm-row shadow-lg custom-search-container rounded-pill bg-white">
                            <div class="input-group input-group-lg flex-nowrap border-0">
                                <input 
                                    type="text" 
                                    id="homeSearchInput" 
                                    class="form-control border-0 py-3 py-sm-3 rounded-pill ps-4 text-dark" 
                                    placeholder="User name..."
                                    style="box-shadow: none;"
                                >
                            </div>
                            <button class="btn btn-primary btn-lg px-4 fw-bold rounded-pill ms-sm-n5 z-3" type="button" id="homeSearchBtn" style="min-width: 120px;">
                                <i class="bi bi-search text-white"></i>
                            </button>
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

    const handleSearch = () => {
        const user = input.value?.trim();
        if (user) window.location.hash = `#/user/${encodeURIComponent(user)}`;
    };

    btn?.addEventListener('click', handleSearch);
    input?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
};