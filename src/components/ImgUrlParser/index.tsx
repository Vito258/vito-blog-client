import { TextField, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import NoImage from "@/assets/NoImage.jpg"; // 导入默认图片

interface ImgUrlParserProps {
  imgUrl?: string;
  onChange?: (imgUrl: string) => void;
}

// 图片解析器，用于解析输入的url 并显示
function ImgUrlParser({ imgUrl, onChange }: ImgUrlParserProps) {
  const [localImgUrl, setLocalImgUrl] = useState(imgUrl || "");
  const [hasError, setHasError] = useState(false);

  // 处理图片加载错误
  const handleImageError = () => {
    setHasError(true);
    setLocalImgUrl(NoImage);
  };

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setLocalImgUrl(newUrl);
    setHasError(false); // 重置错误状态
    onChange && onChange(newUrl);
  };

  return (
    <ImgUrlParserContainer>
      <ImgShowContainer>
        <img
          alt="no image"
          src={hasError ? NoImage : localImgUrl}
          className="img-show"
          onError={handleImageError}
        />
      </ImgShowContainer>
      <ImgUrlInput defaultValue={imgUrl} onChange={handleInputChange} />
    </ImgUrlParserContainer>
  );
}

// ImgUrlParser 的定制样式
const ImgUrlParserContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
});

const ImgShowContainer = styled(Box)({
  minWidth: "100px",  // 最小宽度
  minHeight: "100px", // 最小高度
  maxWidth: "250px",  // 最大宽度
  maxHeight: "200px", // 最大高度
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "10px",    // 添加内边距，防止图片贴边
  
  "& img": {
    maxWidth: "100%",    // 限制最大宽度
    maxHeight: "100%",   // 限制最大高度
    objectFit: "scale-down", // 使用 scale-down 确保图片完整显示
    display: "block",
    width: "auto",       // 使用自动宽度
    height: "auto"       // 使用自动高度
  }
});

const ImgUrlInput = styled(TextField)({
  width: "400px",
  height: "30px",
});

export default ImgUrlParser;
