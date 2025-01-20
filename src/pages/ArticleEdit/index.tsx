import RichTextEditor from "@/components/RichTextEditor";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { saveTechArticle, fetchTeacArticleTypes } from "@/api/api";
import "./style.scss";
import { Article, ArticleType } from "@/type";
import ImgUrlParser from "@/components/ImgUrlParser";

function ArticleEdit() {
  const [article, setArticle] = useState<Article>({ title: "", content: "" });
  const [articleTypeList, setArticleTypeList] = useState<ArticleType[]>([]);

  useEffect(() => {
    fetchTeacArticleTypes().then((res) => {
      setArticleTypeList(res.data.articleTypes);
    });
  }, []);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      title: event.target.value,
    }));
  };

  const handleSubmit = () => {
    // 添加保存逻辑
    saveTechArticle(article).then((res) => {
      console.log(res);
    });
  };

  const handleContentChange = (content: string) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      content: content,
    }));
  };

  const handleImgUrlChange = (imgUrl: string) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      coverImageUrl: imgUrl,
    }));
  };

  return (
    <Box>
      <Box className="article-edit-card">
        <Box className="article-edit-component-container">
          <TextField
            type="text"
            value={article.title}
            onChange={handleTitleChange}
            placeholder="请输入文章标题"
            className="article-edit-title-input"
            sx={{
              maxWidth: "500px",
              minWidth: "300px",
              marginBottom: "20px",
              "&:hover": {
                borderColor: "#009AD6",
              },
            }}
          />
        </Box>
        <Box className="article-edit-component-container">
          <ImgUrlParser
            imgUrl={article.coverImageUrl}
            onChange={handleImgUrlChange}
          />
        </Box>
        <Box className="article-edit-component-container">
          {" "}
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="typeId-select-label">文章类型</InputLabel>
            <Select
              labelId="typeId-select-label"
              id="typeId-select"
              defaultValue={article.typeId}
              label="文章类型"
              placeholder="请选择文章类型"
              sx={{
                width: "200px",
              }}
            >
              {articleTypeList &&
                articleTypeList.length > 0 &&
                articleTypeList.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.typeName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <RichTextEditor
          content={article.content}
          onChange={handleContentChange}
        />
        <Button
          onClick={handleSubmit}
          className="article-edit-submit-button"
          sx={{
            "&.article-edit-submit-button": {
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "skyblue",
              color: "white",
              "&:hover": {
                backgroundColor: "#009AD6",
              },
            },
          }}
        >
          保存文章
        </Button>
      </Box>
    </Box>
  );
}

export default ArticleEdit;
