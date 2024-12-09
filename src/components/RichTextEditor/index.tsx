import { useState } from "react";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import Box from "@mui/material/Box";
import Editor from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/undo';
import createLinkifyPlugin from '@draft-js-plugins/undo';
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
    if (onEditorChange) {
      onEditorChange(newEditorState);
    }
  };

  //  创建编辑器所用到的插件
  const hashtagPlugin = createHashtagPlugin();
  const linkifyPlugin = createLinkifyPlugin();

  const plugins = [linkifyPlugin, hashtagPlugin];

  return (
    <Box className="RichTextEditor">
      <Editor
        editorState={state}
        onChange={handleEditorChange}
        plugins={plugins}
        placeholder="Write your article here..."
      />
    </Box>
  );
}

export default RichTextEditor;
