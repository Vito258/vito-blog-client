import RichTextEditor from "@/components/RichTextEditor";
import { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import Box from "@mui/material/Box";
function ArticleEdit() {
  //   const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //   const [article, setArticle] = useState({ title: "", content: "" });

  //   const handleEditorChange = (newEditorState: EditorState) => {
  //     setEditorState(newEditorState);
  //     setArticle((prevArticle) => ({
  //       ...prevArticle,
  //       content: JSON.stringify(convertToRaw(newEditorState.getCurrentContent())),
  //     }));
  //   };

  //   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setArticle((prevArticle) => ({
  //       ...prevArticle,
  //       title: event.target.value,
  //     }));
  //   };

  //   const handleSubmit = () => {
  //     console.log("Article to be saved:", article);
  //     // 这里可以添加保存逻辑
  //   };

  return (
    <Box>
      <h1>Edit Article</h1>
      {/* <input
        type="text"
        value={article.title}
        onChange={handleTitleChange}
        placeholder="Enter article title"
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      /> */}
      <RichTextEditor />
      {/* <button
        onClick={handleSubmit}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Save Article
      </button> */}
    </Box>
  );
}

export default ArticleEdit;
