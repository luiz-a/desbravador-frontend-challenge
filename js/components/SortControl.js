export const SortControl = () => {
    return `
        <button type="button" class="btn btn-light btn-sm border-0 bg-dark text-white shadow-sm fw-bold d-flex align-items-center gap-2" 
                data-bs-toggle="modal" data-bs-target="#sortModal">
            <i class="bi bi-filter-right fs-5"></i>
            <span>Ordenar</span>
        </button>

        <div class="modal fade" id="sortModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content border-0 shadow">
                    <div class="modal-header border-0 pb-0">
                        <h6 class="modal-title fw-bold">Opções de Ordenação</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body p-3">
                        <div class="list-group list-group-flush gap-2">
                            <div class="small text-muted mb-1 mt-2 uppercase fw-bold" style="font-size: 0.7rem;">ESTRELAS</div>
                            <button class="list-group-item list-group-item-action border rounded sort-option" data-sort="stars" data-order="desc">
                                <i class="bi bi-star-fill text-warning me-2"></i> Maior pontuação
                            </button>
                            <button class="list-group-item list-group-item-action border rounded sort-option" data-sort="stars" data-order="asc">
                                <i class="bi bi-star me-2 text-warning"></i> Menor pontuação
                            </button>

                            <div class="small text-muted mb-1 mt-3 uppercase fw-bold" style="font-size: 0.7rem;">REPOSITÓRIO</div>
                            <button class="list-group-item list-group-item-action border rounded sort-option" data-sort="name" data-order="asc">
                                <i class="bi bi-sort-alpha-down me-2 text-primary"></i> Nome (A - Z)
                            </button>
                            <button class="list-group-item list-group-item-action border rounded sort-option" data-sort="name" data-order="desc">
                                <i class="bi bi-sort-alpha-up me-2 text-primary"></i> Nome (Z - A)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};