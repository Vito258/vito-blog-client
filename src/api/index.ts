import axios from "axios";
import { Article, User } from "@/type";
import { ReSponse } from "@/type";

const apiClient = axios.create({
  baseURL: "/api", // 代理前缀
  headers: {
    "Content-Type": "application/json",
  },
});

// GET 请求
// 获取用户列表
export const fetchUsers = async (): Promise<ReSponse> => {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// 用户登录
export const userLogin = async (user: User): Promise<ReSponse> => {
  try {
    const response = await apiClient.post(`/users/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error user login:", error);
    throw error;
  }
};

// 获取技术文章类型列表
export const fetchTechArticleTypes = async (): Promise<ReSponse> => {
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

// 获取技术文章详情
export const fetchTechArticleById = async (id: number): Promise<ReSponse> => {
  try {
    const response = await apiClient.get(
      `/techArticles/getTechArticleById/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};

// 获取所有技术文章
export const fetchAllTechtalkArticles = async (): Promise<ReSponse> => {
  try {
    const response = await apiClient.get("/techArticles/getTechArticleList");
    return response.data;
  } catch (error) {
    console.error("Error fetching TechtalkAllArticles:", error);
    throw error;
  }
};

// 获取技术文章列表
export const fetchTechArticleByType = async (
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
// 创建用户
export const createUser = async (userData: any): Promise<ReSponse> => {
  try {
    const response = await apiClient.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// 保存技术文章
export const saveTechArticle = async (article: Article): Promise<ReSponse> => {
  try {
    const response = await apiClient.post(
      "/techArticles/saveTechArticle",
      article
    );
    return response.data;
  } catch (error) {
    console.error("Error saving article:", error);
    throw error;
  }
};
