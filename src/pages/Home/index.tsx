// src/pages/Home/index.tsx
import "./style.scss";
import { motion } from "framer-motion";
import Bubble from "@/components/Bubble";
import { calculateBubblePositions } from "@/utils";

function Home() {
  const bubbleContents = [
    "气泡1: 技术分享",
    "气泡2: 生活点滴",
    "气泡3: 旅行见闻",
    "气泡4: 开源项目",
    "气泡5: 个人简介",
    "气泡6: 最新文章",
    "气泡7: 社交链接",
    "气泡8: 联系方式",
  ];

  const minDistance = 150; // 减小最小距离
  const bubblePositions = calculateBubblePositions(
    bubbleContents.length,
    minDistance
  );

  // 计算所有气泡位置的中心点
  const centerX =
    bubblePositions.reduce((sum, pos) => sum + pos.x, 0) /
    bubblePositions.length;
  const centerY =
    bubblePositions.reduce((sum, pos) => sum + pos.y, 0) /
    bubblePositions.length;

  return (
    <div className="home-container">
      <motion.div
        className="center-bubble"
        initial={{ opacity: 0, scale: 0.5, x: centerX, y: centerY }}
        animate={{ opacity: 1, scale: 1, x: centerX, y: centerY }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{
          top: centerY - 100,
          left: centerX - 100,
          right: centerX + 100,
          bottom: centerY + 100,
        }}
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>欢迎来到我的博客</h1>
        <p>这里是关于技术、生活和一切有趣的分享。</p>
      </motion.div>
      <div className="bubble-container">
        {bubbleContents.map((content, index) => (
          <Bubble
            key={index}
            content={content}
            position={{
              x: bubblePositions[index].x,
              y: bubblePositions[index].y,
            }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
