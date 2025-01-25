import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; // Replace with your .NET Core API URL

export const fetchCourses = async () => {
    const response = await axios.get(`${API_BASE}/upskill/courses`);
    return response.data;
};
