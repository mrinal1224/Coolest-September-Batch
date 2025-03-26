import { axiosInstance } from ".";

export const addTheatre = async (payload) => {
    try{
        const response = await axiosInstance.post('http://localhost:8082/api/theatre/add-theatre', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get all theatres for the Admin route
export const getAllTheatresForAdmin = async () => {
    try{
        const response = await axiosInstance.get('http://localhost:8082/api/theatre/get-all-theatres');
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get theatres of a specific owner
export const getAllTheatres = async (payload) => {
    try{
        const response = await axiosInstance.post('http://localhost:8082/api/theatre/get-all-theatres-by-owner', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Update Theatre
export const updateTheatre = async (payload) => {
    try{
        const response = await axiosInstance.put('http://localhost:8082/api/theatre/update-theatre', payload);
        return response.data;
    }catch(err){
        return err.resposne;
    }
}

// Delete Theatre
export const deleteTheatre = async (payload) => {
    try{
        const response = await axiosInstance.put('http://localhost:8082/api/theatre/delete-theatre', payload);
        return response.data;        
    }catch(err){
        return err.response;
    }
}