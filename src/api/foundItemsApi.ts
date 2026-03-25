import axios from "axios";

const API_BASE_URL = "http://localhost:5016/api";

export const getFoundItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/founditems`);
    return response.data;
};

export const getFoundItem = async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/founditems/${id}`);
    return response.data;
};