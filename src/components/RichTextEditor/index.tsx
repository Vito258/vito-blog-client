import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import "./style.scss";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

/**
 * 富文本编辑器组件
 * @param content 文本内容,通常是html 文本
 * @returns
 */
function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // 编辑器内容
  const [html, setHtml] = useState(content || undefined);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {};

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: "请输入内容...",
  };

  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <Box className="RichTextEditor">
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: "1px solid #ccc" }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={(editor) => {
          setHtml(editor.getHtml());
          onChange(editor.getHtml());
        }}
        mode="default"
        style={{ minHeight: "500px", overflowY: "hidden" }}
      />
    </Box>
  );
}

export default RichTextEditor;
