import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const requestPermission = (permission: any) => axios.post(`${API_URL}/request-permission`, permission);
export const modifyPermission = (id: number, permission: any) => axios.put(`${API_URL}/modify-permission/${id}`, permission);
export const getPermissions = () => axios.get(`${API_URL}/permissions`);
export const getPermissionById = (id: number) => axios.get(`${API_URL}/permissions/${id}`);