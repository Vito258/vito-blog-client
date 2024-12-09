import RichTextEditor from "@/components/RichTextEditor";
import { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import Box from "@mui/material/Box";
import { TextField, Card, Button } from "@mui/material";
import "./style.scss"

function ArticleEdit() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [article, setArticle] = useState({ title: "", content: "" });

  const handleEditorChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    setArticle((prevArticle) => ({
      ...prevArticle,
      content: JSON.stringify(convertToRaw(newEditorState.getCurrentContent())),
    }));
  };

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
      <Card className="article-edit-card">
        <h1>Edit Article</h1>
        <TextField
          type="text"
          value={article.title}
          onChange={handleTitleChange}
          placeholder="Enter article title"
          sx={{ marginBottom: "20px" }}
          className="article-edit-title-input"
        />
        <br />
        <RichTextEditor editorState={editorState} onEditorChange={handleEditorChange} />
        <Button
          onClick={handleSubmit}
          className="article-edit-submit-button"
          sx={{
            '&.article-edit-submit-button': {
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "skyblue",
              color: "white",
              '&:hover': {
                backgroundColor: '#009AD6',
              },
            },
          }}
        >
          保存文章
        </Button>
      </Card>
    </Box>
  );
}

export default ArticleEdit;
