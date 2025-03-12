import { axiosInstance } from "."

export const RegisterUser = async (values)=>{
    try {
        const response = await axiosInstance.post('/api/users/register', values)
        console.log('User Registered')
        return response.data 
    } catch (error) {
        console.log(error)
    }

}


// Write the Login Function 



