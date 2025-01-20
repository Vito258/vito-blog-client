// src/utils/BubbleUtil.ts

// 计算颜色的亮度
function calculateBrightness(r: number, g: number, b: number): number {
  // 使用相对亮度公式
  return (r * 299 + g * 587 + b * 114) / 1000;
}

interface ColorPair {
  background: string;
  text: string;
}

const COLOR_PAIRS: ColorPair[] = [
  { background: '#5B8982', text: '#FFFFFF' },
  { background: '#45545F', text: '#CEC6B6' },
  { background: '#D47655', text: '#E1F8E1' },
  { background: '#223C5F', text: '#E3927F' },
  { background: '#825855', text: '#F9ECDF' },
  { background: '#331B40', text: '#ADC7B5' },
  { background: '#4F586B', text: '#DDE2F1' },
  { background: '#07553A', text: '#CFD468' },
  { background: '#0A164E', text: '#F5D040' },
  { background: '#023440', text: '#F0EDCC' },
  { background: '#42586E', text: '#E3D4AF' },
  { background: '#AE9AAB', text: '#F2EBE7' },
  { background: '#417CA9', text: '#EDEBE4' },
  { background: '#7379B0', text: '#C6EDEC' },
  { background: '#4E2236', text: '#F26363' },
  { background: '#1E4177', text: '#e1aa4d' },
  { background: '#FEDEE1', text: '#677EA0' },
  { background: '#A61840', text: '#FEDFB8' },
];

// 用于追踪已使用的颜色组合
let usedColorPairs: Set<number> = new Set();

// 获取随机未使用的颜色组合
export function getRandomColorPair(): ColorPair {
  // 如果所有颜色都已使用，重置已使用集合
  if (usedColorPairs.size >= COLOR_PAIRS.length) {
    usedColorPairs.clear();
  }

  // 获取未使用的随机颜色索引
  let index: number;
  do {
    index = Math.floor(Math.random() * COLOR_PAIRS.length);
  } while (usedColorPairs.has(index));

  // 标记该颜色组合为已使用
  usedColorPairs.add(index);
  return COLOR_PAIRS[index];
}

export function getRandomFontSize() {
  return Math.floor(Math.random() * 12) + 10; // 随机字体大小在 10px 到 22px 之间
}

export function calculateBubblePositions(totalBubbles: number, minDistance: number) {
  const positions = [];
  const baseRadius = 250; // 减小基础半径
  const radiusVariation = 100; // 减小半径变化范围
  const maxAttempts = 50;

  for (let i = 0; i < totalBubbles; i++) {
    let attempts = 0;
    let validPosition = false;
    
    while (!validPosition && attempts < maxAttempts) {
      const angle = (i / totalBubbles) * 2 * Math.PI + (Math.random() - 0.5) * 0.3; // 减小角度随机偏移
      const radius = baseRadius + Math.random() * radiusVariation;
      
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      // 检查与所有已有气泡的距离
      validPosition = true;
      for (const pos of positions) {
        const dx = x - pos.x;
        const dy = y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < minDistance) {
          validPosition = false;
          break;
        }
      }
      
      if (validPosition) {
        positions.push({ x, y });
        break;
      }
      
      attempts++;
    }
    
    if (!validPosition) {
      const angle = (i / totalBubbles) * 2 * Math.PI;
      const radius = baseRadius + (Math.random() * 0.5) * radiusVariation; // 减小随机半径变化
      positions.push({
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      });
    }
  }

  return positions;
}