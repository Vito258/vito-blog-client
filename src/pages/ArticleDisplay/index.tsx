import { Box, Container, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import { Article } from "@/type";
import dayjs from "dayjs";
import { fetchTechArticleById } from "@/api";

function ArticleDetail() {
  // 获取路由参数
  const location = useLocation();
  const { id } = location.state || {};
  // 文章数据
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // 添加获取文章详情的接口调用
    const fetchArticle = async () => {
      const response = await fetchTechArticleById(Number(id));
      setArticle(response.data.article);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <ArticleContainer>
      {/* 文章标题 */}
      <ArticleTitle variant="h3">{article.title}</ArticleTitle>

      {/* 文章信息 */}
      <ArticleInfo>
        <Typography variant="body2" color="textSecondary">
          发布时间：{dayjs(article.createdDate).format("YYYY-MM-DD HH:mm")}
        </Typography>
      </ArticleInfo>

      {/* 文章封面 */}
      {article.coverImageUrl && (
        <CoverImage>
          <img src={article.coverImageUrl} alt={article.title} />
        </CoverImage>
      )}

      {/* 文章内容 */}
      <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticleContainer>
  );
}

// 样式组件
const ArticleContainer = styled(Container)({
  padding: "2rem 0",
  maxWidth: "800px",
  margin: "0 auto",
});

const ArticleTitle = styled(Typography)({
  marginBottom: "1rem",
  fontWeight: "bold",
  textAlign: "center",
});

const ArticleInfo = styled(Box)({
  marginBottom: "2rem",
  textAlign: "center",
  color: "#666",
});

const CoverImage = styled(Box)({
  marginBottom: "2rem",
  width: "100%",
  maxHeight: "400px",
  overflow: "hidden",
  borderRadius: "8px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ArticleContent = styled(Box)({
  "& img": {
    maxWidth: "100%",
    height: "auto",
    margin: "1rem 0",
  },

  "& p": {
    margin: "1rem 0",
    lineHeight: "1.8",
    fontSize: "16px",
  },

  "& h1, & h2, & h3, & h4, & h5, & h6": {
    margin: "1.5rem 0 1rem",
    fontWeight: "bold",
  },

  "& a": {
    color: "#1976d2",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  "& blockquote": {
    margin: "1rem 0",
    padding: "0.5rem 1rem",
    borderLeft: "4px solid #1976d2",
    backgroundColor: "#f5f5f5",
  },

  "& code": {
    backgroundColor: "#f5f5f5",
    padding: "0.2rem 0.4rem",
    borderRadius: "4px",
    fontSize: "0.9em",
  },

  "& pre": {
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    borderRadius: "4px",
    overflow: "auto",
    "& code": {
      backgroundColor: "transparent",
      padding: 0,
    },
  },

  "& ul, & ol": {
    margin: "1rem 0",
    paddingLeft: "2rem",
  },

  "& li": {
    margin: "0.5rem 0",
  },

  "& table": {
    width: "100%",
    borderCollapse: "collapse",
    margin: "1rem 0",

    "& th, & td": {
      border: "1px solid #ddd",
      padding: "0.5rem",
    },

    "& th": {
      backgroundColor: "#f5f5f5",
    },
  },
});

export default ArticleDetail;
