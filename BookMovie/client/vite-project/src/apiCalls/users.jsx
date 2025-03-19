import { axiosInstance } from "."


// Resgistration Flow
export const RegisterUser = async (values)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8082/api/users/register', values)
        return response.data 
    } catch (error) {
        console.log(error)
    }

}


// Write the Login Function 

export const LoginUser = async (values)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8082/api/users/login', values)
        return response.data 
    } catch (error) {
        console.log(error)
    }

}
// to get current or valid user
export const GetCurrentUser = async () =>{
    try {
        const response = await axiosInstance.get('http://localhost:8082/api/users/get-valid-user')
        return response.data
    } catch (error) {
       console.log(error)
    }
}










