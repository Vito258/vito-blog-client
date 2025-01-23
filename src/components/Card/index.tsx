import Card from "@mui/material/Card";
import { Grow } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.scss";
import { stripHtmlTags } from "@/utils";

interface CustomCardProps {
  title: string;
  imgUrl: string;
  content: string;
  date?: string;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  imgUrl,
  date,
  onClick,
}) => {
  // 确保 content 不为空，先过滤HTML标签，再截取内容
  const plainText = stripHtmlTags(content || "");
  const shortContent = plainText.substring(0, 100);

  return (
    <Grow in={true} timeout={500}>
      <Card className="custom-card" onClick={onClick}>
        <CardMedia
          className="card-media"
          component="img"
          alt="no image"
          image={imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {shortContent}
            {plainText.length > 100 && "......"}
          </Typography>
        </CardContent>
        <div className="card-date">{date}</div>
      </Card>
    </Grow>
  );
};
export default CustomCard;
