import axios from "../../../utils/axiosConfig"


const authService = {
    login: async (credentials) => {
        try {
            return await axios.post('login_endpoint', credentials);
        } catch(error) {
            console.error('Error during login:', error);
            throw error;
        }
    }
}

export default authService