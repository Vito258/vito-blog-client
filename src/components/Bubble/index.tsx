// src/components/Bubble/index.tsx
import React from "react";
import { motion } from "framer-motion";
import { getRandomFontSize, getRandomColorPair } from "@/utils";
import "./style.scss";

interface BubbleProps {
  content: string;
  position: { x: number; y: number };
  index: number;
}

const Bubble: React.FC<BubbleProps> = ({ content, position, index }) => {
  const fontSize = getRandomFontSize();
  const bubbleSize = fontSize * 10; // 根据字体大小调整气泡大小
  const colorPair = getRandomColorPair();

  return (
    <motion.div
      className="bubble"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: position.x, y: position.y, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
      style={{
        position: "absolute",
        width: bubbleSize,
        height: bubbleSize,
        backgroundColor: colorPair.background,
        color: colorPair.text,
        fontSize: `${fontSize}px`,
        zIndex: index, // 控制气泡的堆叠顺序
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // 添加轻微阴影提升可读性
      }}
    >
      <div className="bubble-content">
        <p style={{ margin: 0, wordBreak: "break-word" }}>{content}</p>
      </div>
    </motion.div>
  );
};

export default Bubble;
