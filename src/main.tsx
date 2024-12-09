import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto";
import { RouterProvider } from "react-router-dom";
import "../public/core/live2dcubismcore.min.js";
import router from "./router";

// 添加定义 global 对象的代码
if (typeof global === "undefined") {
  const globalAny: any = global;
  globalAny.global = globalAny.window || globalAny.self || globalAny;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
