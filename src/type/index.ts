// 后端的返回类型
export interface ReSponse {
  code: number;
  data: any;
  msg: string;
}

// 文章类型
export interface Article {
  title: string;
  content: string;
  coverImageUrl: string;
  createdDate: string;
  updatedDate: string;
}

// 日期的格式化类型
export enum DateFormatType {
  YYYY_MM_DD = "YYYY-MM-DD",
  YYYY_MM_DD_HH_mm_ss = "YYYY-MM-DD HH:mm",
}
