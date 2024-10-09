import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageIcon from '@mui/icons-material/Message';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import "./style.scss"

const categories = [
  {
    id: "Explore",
    name: "探索",
    children: [
      {
        id: "techtalk",
        name: "技术杂谈",
        icon: <DescriptionIcon /> ,
      },
      { id: "projectshare", name:'项目分享', icon: <CodeIcon /> },
      { id: "notes", name:'随笔·杂谈', icon: <NoteAltIcon /> },
      { id: "chatroom", name:'聊天室', icon: <ChatBubbleOutlineIcon /> },
    ],
  },
  {
    id: "Interactions",
    name: "互动",
    children: [
      { id: "messages", name:'留言',  icon: <MessageIcon /> },
      { id: "donations", name:'打赏', icon: <MonetizationOnIcon /> },
      { id: "about", name:'关于我', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  fontSize: 16,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
  "&:focus": {
    bgcolor: "#0f2941",
    color: "#4fc3f7",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const navigate = useNavigate();
  const { ...other } = props;

  return (
    <div className="navigator-container">
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {/* Brand */}
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22,color: '#fff' }}
        >
          @归隐不是宅
        </ListItem>

        {/* Home ListItem */}
        <ListItemButton sx={{ ...item, ...itemCategory }} onClick={() => navigate('/home')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText >首页</ListItemText>
        </ListItemButton>

        {/* Categories ListItem */}
        {categories.map(({ id,name, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{name}</ListItemText>
            </ListItem>
            {children.map(({ id: childId,name, icon }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton sx={item} onClick={() => navigate(`/${childId}`)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
    </div>
  );
}
