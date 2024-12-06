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
