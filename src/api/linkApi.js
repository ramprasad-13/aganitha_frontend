import axios from 'axios';

// Set the base URL for the API. In production, this should be handled by 
// environment variables (e.g., using Vite, Next.js, etc.)
// For now, assume the frontend and backend are on the same domain, or use localhost

// Access the variable defined in your .env file
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; 

// We construct the full base URL including the /api path
const API_BASE_URL = `${BACKEND_URL}/api/links`;

// --- Helper for handling requests ---
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * GET /api/links - Lists all links.
 */
export const fetchLinks = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error('API Error: fetchLinks', error);
        throw error;
    }
};

/**
 * POST /api/links - Creates a new link.
 */
export const createLink = async (formData) => {
    try {
        const response = await api.post('/', formData);
        return response.data;
    } catch (error) {
        console.error('API Error: createLink', error);
        // Throw the error for the component to handle validation/conflict messages
        throw error; 
    }
};

/**
 * DELETE /api/links/:code - Deletes a link.
 */
export const deleteLink = async (code) => {
    try {
        // Axios handles 204 No Content response fine, but you can explicitly check if needed
        await api.delete(`/${code}`); 
        return true;
    } catch (error) {
        console.error('API Error: deleteLink', error);
        throw error;
    }
};

/**
 * GET /api/links/:code - Gets stats for a single link.
 */
export const fetchLinkStats = async (code) => {
    try {
        const response = await api.get(`/${code}`);
        return response.data;
    } catch (error) {
        console.error('API Error: fetchLinkStats', error);
        throw error;
    }
};