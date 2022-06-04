import axios from "axios";

// API from https://www.freetogame.com/api-doc

const api = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '9780dc5441msh4b43f5535a5d249p1f3823jsn48a5045b68a5'
    }
});

export default api;