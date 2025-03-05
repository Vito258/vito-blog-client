// 后端的返回类型
export interface ReSponse {
  code: number;
  data: any;
  msg: string;
}

// 用户
export interface User {
  id?: number;
  account: string;
  password: string;
  nickname?: string;
  createdDate?: string;
  updatedDate?: string;
}

// 文章
export interface Article {
  id?: number;
  typeId?: number;
  title: string;
  content: string;
  coverImageUrl?: string;
  createdDate?: string;
  updatedDate?: string;
}

// 文章类型
export interface ArticleType {
  id?: number;
  typeName: string;
}

// 日期的格式化类型
export enum DateFormatType {
  YYYY_MM_DD = "YYYY-MM-DD",
  YYYY_MM_DD_HH_mm_ss = "YYYY-MM-DD HH:mm",
}
