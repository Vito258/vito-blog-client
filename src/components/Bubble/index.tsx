// src/components/Bubble/index.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  getRandomLightColor,
  getRandomFontSize,
  getRandomFontColor,
} from "@/utils/BubbleUtil";

interface BubbleProps {
  content: string;
  position: { x: number; y: number };
  index: number;
}

const Bubble: React.FC<BubbleProps> = ({ content, position, index }) => {
  const fontSize = getRandomFontSize();
  const bubbleSize = fontSize * 10; // 根据字体大小调整气泡大小
  const backgroundColor = getRandomLightColor();
  const fontColor = getRandomFontColor();

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
        backgroundColor: backgroundColor,
        fontSize: `${fontSize}px`,
        color: fontColor,
        zIndex: index, // 控制气泡的堆叠顺序
      }}
    >
      <div className="bubble-content">
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default Bubble;