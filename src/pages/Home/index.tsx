// src/pages/Home/index.tsx
import "./style.scss";
import { motion } from "framer-motion";
import Bubble from "@/components/Bubble";
import { calculateBubblePositions } from "@/utils/BubbleUtil";

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

  const minDistance = 100; // 设置最小距离
  const bubblePositions = calculateBubblePositions(bubbleContents.length, minDistance);

  return (
    <div className="home-container">
      <motion.div
        className="center-bubble"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        style={{ zIndex: 1000 }} // 确保中心气泡始终在最上层
      >
        <h1>欢迎来到我的博客</h1>
        <p>这里是关于技术、生活和一切有趣的分享。</p>
      </motion.div>
      <div className="bubble-container">
        {bubbleContents.map((content, index) => (
          <Bubble
            key={index}
            content={content}
            position={{ x: bubblePositions[index].x ?? 0, y: bubblePositions[index].y ?? 0 }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;