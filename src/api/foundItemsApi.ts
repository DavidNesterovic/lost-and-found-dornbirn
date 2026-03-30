import axios from "axios";
import type { FoundItem } from "../types.ts";

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

type CurrentUserResponse = {
    email: string | null;
    isAdmin: boolean;
};

export type AdminCategory = {
    id: string;
    name: string;
    itemCount: number;
};

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const getUserEmail = () => localStorage.getItem(USER_EMAIL_KEY);

export const isLoggedIn = () => !!getAccessToken();

export const clearAuthStorage = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_EMAIL_KEY);
};

export const getAuthConfig = () => {
    const accessToken = getAccessToken();

    return {
        headers: {
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
    };
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

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
    const response = await api.get<CurrentUserResponse>("/account/me", getAuthConfig());

    if (response.data.email) {
        localStorage.setItem(USER_EMAIL_KEY, response.data.email);
    }

    return response.data;
};

export const isAdmin = async (): Promise<boolean> => {
    try {
        const currentUser = await getCurrentUser();
        return currentUser.isAdmin;
    } catch {
        return false;
    }
};

export async function getFoundItems(limit?: number): Promise<FoundItem[]> {
    const response = await api.get<FoundItem[]>("/founditems", {
        params: limit ? { limit } : {},
    });

    return response.data;
}

export const getFoundItem = async (id: number) => {
    const response = await api.get(`/founditems/${id}`);
    return response.data;
};

export const createFoundItem = async (newItem: {
    color: string;
    contactEmail: string;
    contactName: string;
    description: string;
    location: string;
    title: string;
    categoryId: number;
}) => {
    const response = await api.post("/founditems", newItem, getAuthConfig());
    return response.data;
};

export const getCategories = async () => {
    const response = await api.get("/categories/all");
    return response.data;
};

export const getAdminCategories = async (): Promise<AdminCategory[]> => {
    const response = await api.get<AdminCategory[]>("/categories/admin/all", getAuthConfig());
    return response.data;
};

export const createCategory = async (name: string) => {
    const response = await api.post(
        "/categories/admin/create",
        { name },
        getAuthConfig()
    );

    return response.data;
};

export const deleteCategory = async (id: string) => {
    await api.delete(`/categories/${id}`, getAuthConfig());
};