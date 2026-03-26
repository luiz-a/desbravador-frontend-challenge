const baseUrl = "https://api.github.com";

export const getGitHubUser = async (username) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw error;
    }
};
export const getUserRepos = async (username) => {
    try {
        const response = await axios.get(`${baseUrl}/users/${username}/repos`);
        const repos = response.data;

        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
        throw error;
    }
};

export const getRepoDetails = async (fullName) => {
    try {
        const response = await axios.get(`${baseUrl}/repos/${fullName}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes do repositório:", error);
        throw error;
    }
};