export const SortControl = () => {
    return `
        <div class="d-flex align-items-center">
            <button class="btn btn-light btn-sm border shadow-sm fw-bold d-flex align-items-center gap-2" 
                    id="btnSortStars" 
                    data-order="desc">
                <i class="bi bi-star-fill text-warning"></i>
                <span>Ordenar por Estrelas</span>
                <i class="bi bi-arrow-down" id="sortIcon"></i>
            </button>
        </div>
    `;
};