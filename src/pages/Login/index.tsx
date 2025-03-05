import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { userLogin } from "@/api";

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

interface LoginReq {
  account: string;
  password: string;
}

// 登录页面
const LoginPage: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 控制alert 的显示
  const [alertType, setAlertType] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 模拟登录验证（实际应调用API）
    if (username && password) {
      var user: LoginReq = { account: username, password: password };
      userLogin(user).then((res) => {
        console.log(res);
        if (res.code === 0) {
          // 存储token[1](@ref)
          localStorage.setItem("token", res.data.nickname);
          setAlertType(1);
          navigate("/layout");
        } else {
          setAlertType(2);
        }
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {alertType === 1 ? (
          <Alert severity="success">登录成功</Alert>
        ) : alertType === 2 ? (
          <Alert severity="error">用户名或密码错误，请重试</Alert>
        ) : <Box sx={{height:"50px"}}></Box>}
        <Typography component="h1" variant="h5">
          登录页面
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="账户"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="密码"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登录
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
