import axios from "../../../utils/axiosConfig"

const authService = {
    login: async ({credentials}) => {
        try {
            const response = await axios.post('auth/login', credentials);
            return response;
        } catch (error) {
            console.error(error);
            return error?.response;
        }
    },

    saveClient: async ({credentials}) => {
        try {
            const response = await axios.post('client/saveUser', credentials);
            return response;
        } catch (error) {
            console.error(error);
            return error?.response;
        }
    },

    saveCompany: async ({credentials}) => {
        try {
            const response = await axios.post('company/saveUser', credentials);
            return response;
        } catch (error) {
            console.error(error);
            return error?.response;
        }
    },

    sendEmailAlertLogin: async ({email}) => {
        try {
            const response = await axios.post(`sendEmailAlertLogin/${email}`);
            return response;
        } catch (error) {
            console.error(error);
            return error?.response;
        }
    },
}

export default authService