import RichTextEditor from "@/components/RichTextEditor";
import { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Card, Button, Typography } from "@mui/material";
import "./style.scss";

function ArticleEdit() {
  const [article, setArticle] = useState({ title: "", content: "" });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      title: event.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Article to be saved:", article);
    // 这里可以添加保存逻辑
  };

  return (
    <Box>
      <Box className="article-edit-card">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            type="text"
            value={article.title}
            onChange={handleTitleChange}
            placeholder="请输入文章标题"
            sx={{
              marginBottom: "20px",
              "&:hover": {
                borderColor: "#009AD6",
              },
            }}
            className="article-edit-title-input"
          />
        </Box>
        <br />
        <RichTextEditor content={article.content} />
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
