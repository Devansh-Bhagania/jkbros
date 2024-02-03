import axios from "axios";

const baseUrl = "https://jkbros.onrender.com/";

export const validateUser = async (token) => {
    try {
        console.log(token);
        const res = await axios.post(`${baseUrl}api/v1/users/login`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Response:', res.data); // Log the response for debugging
        return res.data;
    } catch (error) {
        // Log the error for debugging
        console.error('Error validating user:', error.message);
        throw error; // Rethrow the error to handle it at the calling site if needed
    }
};

