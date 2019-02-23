import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000"
    //     process.env.NODE_ENV === "production"
    //         ? // TODO: insert production server here
    //         : "http://localhost:3000",
    // headers: { "Content-Type": "application/json" },
    // proxy: false,
    // withCredentials: true
});

export { api };
