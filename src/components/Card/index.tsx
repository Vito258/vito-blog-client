import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.scss";

interface CustomCardProps {
  imgUrl: string;
  alt: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imgUrl, alt }) => {
  return (
    <Card className="custom-card">
      <CardMedia
        className="card-media"
        component="img"
        alt="green iguana"
        image="https://haowallpaper.com/link/common/file/previewFileImg/15556743616106816"
        // alt={alt}
        // image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CustomCard;
