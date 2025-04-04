import { axiosInstance } from ".";

export const makePayment = async (token, amount) => {
    try{
        const response = await axiosInstance.post('http://localhost:8082/api/bookings/make-payment', {token, amount});
        // console.log(token, amount, response);
        return response.data;
    }catch(err){
        return err.response
    }
}

export const bookShow = async (payload) => {
    try{
        const response = await axiosInstance.post('http://localhost:8082/api/bookings/book-show', payload);
        console.log(response.data);
        return response.data;
    }catch(err){
        return err.response
    }
}

export const getAllBookings = async () => {
    try{
        const response = await axiosInstance.get('http://localhost:8082/api/bookings/get-all-bookings');
        return response.data;
    }catch(err){
        return err.response;
    }
}