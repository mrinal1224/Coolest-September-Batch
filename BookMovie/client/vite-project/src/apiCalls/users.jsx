import { axiosInstance } from "."

export const RegisterUser = async (values)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8082/api/users/register', values)
        console.log('User Registered')
        return response.data 
    } catch (error) {
        console.log(error)
    }

}