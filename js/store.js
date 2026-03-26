export const RepoStore = {
    _state: {
        repos: []
    },
    setRepos(repos) {
        this._state.repos = [...repos];
    },
    getRepos() {
        return this._state.repos;
    },
    sort(criteria, order) {
        this._state.repos.sort((a, b) => {
            let comp = 0;
            if (criteria === 'stars') {
                comp = a.stargazers_count - b.stargazers_count;
            } else {
                comp = a.name.localeCompare(b.name);
            }
            return order === 'desc' ? comp * -1 : comp;
        });
        return this._state.repos;
    }
};