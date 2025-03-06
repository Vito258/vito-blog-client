const TokenKey = "token";

// 设置token
export function setToken(token: any) {
  if (token === null || token === undefined) {
    return;
  }
  if (typeof token === "object") {
    token = JSON.stringify(token);
  }
  localStorage.setItem(TokenKey, token);
}

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey);
}

// 删除token
export function removeToken() {
  localStorage.removeItem(TokenKey);
}
