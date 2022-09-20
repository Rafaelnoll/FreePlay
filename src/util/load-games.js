import api from "../libs/api";

export const loadGames = async () => {
    const allGames = await api.get("/games");
    return allGames;
}