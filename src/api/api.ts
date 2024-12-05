import axios from "axios";
import { Article } from "@/type";
import { ReSponse } from "@/type";

const apiClient = axios.create({
  baseURL: "/api", // 代理前缀
  headers: {
    "Content-Type": "application/json",
  },
});

// GET 请求
export const fetchUsers = async (): Promise<ReSponse> => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchTeactalkTabs = async (): Promise<ReSponse> => {
  try {
    const response = await apiClient.get(
      "/techArticleTypes/getTechArticleTypeList"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching TechtalkTabs:", error);
    throw error;
  }
};

export const fetchTeactalkAllArticles = async (): Promise<ReSponse> => {
  try {
    const response = await apiClient.get("/techArticles/getTechArticleList");
    return response.data;
  } catch (error) {
    console.error("Error fetching TechtalkAllArticles:", error);
    throw error;
  }
};

export const fetchTeactalkArticleByType = async (
  type: number
): Promise<ReSponse> => {
  try {
    const response = await apiClient.get(
      `/techArticles/getTechArticleListByType?typeId=${type}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching TechtalkAllArticles:", error);
    throw error;
  }
};

// POST 请求
export const createUser = async (userData: any): Promise<ReSponse> => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
