import Card from "@mui/material/Card";
import { Grow } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.scss";

interface CustomCardProps {
  title: string;
  imgUrl: string;
  content: string;
  date?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  content,
  imgUrl,
  date,
}) => {
  // 截取content的内容
  const shortContent = content.slice(0, 100);
  return (
    <Grow  in={true} timeout={500}>
      <Card className="custom-card">
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
            {shortContent}......
          </Typography>
        </CardContent>
        <div className="card-date">{date}</div>
      </Card>
    </Grow>
  );
};
export default CustomCard;
