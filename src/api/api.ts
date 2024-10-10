import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // 代理前缀
  headers: {
    'Content-Type': 'application/json'
  }
});

// GET 请求
export const fetchUsers = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchTeactalkTabs = async (): Promise<any> => {
  try {
    const response = await apiClient.get("/getTechtalkTabs");
    return response.data;
  } catch (error) {
    console.error('Error fetching TechtalkTabs:', error);
    throw error;
  }
};

// POST 请求
export const createUser = async (userData: any): Promise<any> => {
  try {
    const response = await apiClient.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};