import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; // Replace with your .NET Core API URL

export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE}/social/posts`);
    return response.data;
};

export const createPost = async (content: string, mediaUrl?: string) => {
    const response = await axios.post(`${API_BASE}/social/posts`, { content, mediaUrl });
    return response.data;
};
