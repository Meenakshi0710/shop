import axios from "axios";

export const makeRequest = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers: {
        Authorization:"bearer " + import.meta.env.VITE_API_TOKEN,},
})
export const makePaymentRequest = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers: {
        Authorization:"bearer " + import.meta.env.VITE_API_TOKEN,},
        "Content-Type": "application/json",
})