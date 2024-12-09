import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import Box from "@mui/material/Box";
import "./style.scss";

interface RichTextEditorProps {
  // 编辑状态
  editorState?: EditorState;
  // 编辑状态改变的回调
  onEditorChange?: (newEditorState: EditorState) => void;
}

/**
 * 富文本编辑器组件
 * @param editorState
 * @param onEditorChange
 * @returns
 */
function RichTextEditor({ editorState, onEditorChange }: RichTextEditorProps) {
  const [state, setState] = useState(editorState || EditorState.createEmpty());

  const handleEditorChange = (newEditorState: EditorState) => {
    setState(newEditorState);
    onEditorChange;
  };

  return (
    <Box className="RichTextEditor">
      <Editor
        editorState={state}
        onChange={handleEditorChange}
        placeholder="Write your article here..."
      />
    </Box>
  );
}

export default RichTextEditor;
