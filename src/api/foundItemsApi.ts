import axios from "axios";
import type { FoundItem } from '../types';

const API_BASE_URL = "http://localhost:5016/api";

export const getFoundItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/founditems`);
    return response.data;
};

export const getFoundItem = async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/founditems/${id}`);
    return response.data;
};

export const createFoundItem = async (newItem: Omit<FoundItem, 'id'>) => {
    try {
        const response = await fetch('http://localhost:5016/api/FoundItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });

        if (!response.ok) {
            throw new Error('Fehler beim Speichern in der Datenbank');
        }

        return await response.json();
    } catch (error) {
        console.error("Fehler in createFoundItem:", error);
        throw error;
    }
};