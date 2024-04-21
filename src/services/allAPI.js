import { commonAPI } from "./commonAPi"
import SERVER_URL from "./serverUrl"



// login api

export const registerAPI = async (user)=>{
 return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

export const updateAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/update`,user,"")
   }