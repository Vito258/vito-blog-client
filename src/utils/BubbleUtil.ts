// src/utils/BubbleUtil.ts
export function getRandomLightColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    // Ensure the color is light by adjusting the RGB values
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
  
    // Increase the brightness of the color
    r = Math.min(255, r + 50);
    g = Math.min(255, g + 50);
    b = Math.min(255, b + 50);
  
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  export function getRandomFontSize() {
    return Math.floor(Math.random() * 12) + 10; // 随机字体大小在 10px 到 22px 之间
  }
  
  export function getRandomFontColor() {
    const colors = [
      "#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#33FFF6", "#F63333", "#33F6FF",
      "#F6F333", "#3333FF", "#FF33A1", "#A133FF", "#33FFA1", "#FFA133", "#A1FF33", "#33A1FF"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  export function calculateBubblePositions(totalBubbles: number, minDistance: number) {
    const positions = [];
    const radius = 150; // 调整半径以改变气泡之间的距离
  
    for (let i = 0; i < totalBubbles; i++) {
      let x, y;
      let validPosition = false;
  
      while (!validPosition) {
        const angle = (i / totalBubbles) * 360;
        const distance = radius + Math.random() * 50; // 增加一些随机性
        x = distance * Math.cos((angle * Math.PI) / 180);
        y = distance * Math.sin((angle * Math.PI) / 180);
  
        validPosition = true;
        for (const pos of positions) {
          const dx = x - (pos.x ?? 0);
          const dy = y - (pos.y ?? 0);
          const distanceBetween = Math.sqrt(dx * dx + dy * dy);
          if (distanceBetween < minDistance) {
            validPosition = false;
            break;
          }
        }
      }
  
      positions.push({ x, y });
    }
  
    return positions;
  }