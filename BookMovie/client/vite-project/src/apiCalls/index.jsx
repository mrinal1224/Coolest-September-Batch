import axios from 'axios'

export const axiosInstance = axios.create({
      headers :{
        "Content-Type": "application/json",
        'Authorization':`Bearer ${localStorage.getItem('token')}`,
        "Access-Control-Allow-Origin": "*", // Allows all origins (adjust for security)
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
}
})



