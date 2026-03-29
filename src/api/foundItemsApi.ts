import axios from "axios";
import type { FoundItem } from "../types";

const API_BASE_URL = "http://localhost:5016/api";
const AUTH_BASE_URL = "http://localhost:5016";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_EMAIL_KEY = "userEmail";

type LoginResponse = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
};

type RegisterPayload = {
    email: string;
    password: string;
};

type LoginPayload = {
    email: string;
    password: string;
};

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const getUserEmail = () => localStorage.getItem(USER_EMAIL_KEY);

export const isLoggedIn = () => !!getAccessToken();

export const clearAuthStorage = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
};

export const registerUser = async (payload: RegisterPayload) => {
    const response = await axios.post(`${AUTH_BASE_URL}/register`, payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const loginUser = async (payload: LoginPayload) => {
    const response = await axios.post<LoginResponse>(
        `${AUTH_BASE_URL}/login?useCookies=false`,
        payload,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken);
    localStorage.setItem(USER_EMAIL_KEY, payload.email);

    return response.data;
};

export const logoutUser = () => {
    clearAuthStorage();
};

export const getFoundItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/founditems`);
    return response.data;
};

export const getFoundItem = async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/founditems/${id}`);
    return response.data;
};

export const createFoundItem = async (newItem: Omit<FoundItem, "id">) => {
    const accessToken = getAccessToken();

    const response = await axios.post(`${API_BASE_URL}/founditems`, newItem, {
        headers: {
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
    });

    return response.data;
};