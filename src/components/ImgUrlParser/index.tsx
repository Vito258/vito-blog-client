import { TextField, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

interface ImgUrlParserProps {
  imgUrl?: string;
  onChange?: (imgUrl: string) => void;
}

// 图片解析器，用于解析输入的url 并显示
function ImgUrlParser({ imgUrl, onChange }: ImgUrlParserProps) {
  const [localImgUrl, setLocalImgUrl] = useState(noImgUrl);
  return (
    <ImgUrlParserContainer>
      <ImgShowContainer>
        <img alt="no image" src={localImgUrl} className="img-show"></img>
      </ImgShowContainer>
      <ImgUrlInput
        defaultValue={imgUrl}
        onChange={(e) => {
          setLocalImgUrl(e.target.value);
          onChange && onChange(e.target.value);
        }}
      />
    </ImgUrlParserContainer>
  );
}

// 默认图片的url
const noImgUrl =
  "https://static.vecteezy.com/system/resources/previews/008/695/917/original/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg";

// ImgUrlParser 的定制样式
const ImgUrlParserContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
});

const ImgShowContainer = styled(Box)({
  width: "200px",
  height: "150px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  maxHeight: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
  objectFit: "contain",
});

const ImgUrlInput = styled(TextField)({
  width: "400px",
  height: "30px",
});

export default ImgUrlParser;
