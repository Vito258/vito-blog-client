import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import { Suspense } from "react";
import ArticleEdit from "@/pages/ArticleEdit";
// 懒加载组件
const Layout = React.lazy(() => import("@/pages/Layout"));
const About = React.lazy(() => import("@/pages/AboutMe"));
const Home = React.lazy(() => import("@/pages/Home"));
const ChatRoom = React.lazy(() => import("@/pages/ChatRoom"));
const Donations = React.lazy(() => import("@/pages/Donations"));
const Messages = React.lazy(() => import("@/pages/Messages"));
const NotesAndChats = React.lazy(() => import("@/pages/NotesAndChats"));
const ProjectShare = React.lazy(() => import("@/pages/ProjectShare"));
const TechTalk = React.lazy(() => import("@/pages/TechTalk"));

// 路由菜单
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"加载中..."}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        // path:'/home',
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"加载中..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/donations",
        element: (
          <Suspense fallback={"加载中..."}>
            <Donations />
          </Suspense>
        ),
      },
      {
        path: "/chatroom",
        element: (
          <Suspense fallback={"加载中..."}>
            <ChatRoom />
          </Suspense>
        ),
      },
      {
        path: "/messages",
        element: (
          <Suspense fallback={"加载中..."}>
            <Messages />
          </Suspense>
        ),
      },
      {
        path: "/notes",
        element: (
          <Suspense fallback={"加载中..."}>
            <NotesAndChats />
          </Suspense>
        ),
      },
      {
        path: "/projectshare",
        element: (
          <Suspense fallback={"加载中..."}>
            <ProjectShare />
          </Suspense>
        ),
      },
      {
        path: "/techtalk",
        element: (
          <Suspense fallback={"加载中..."}>
            <TechTalk />
          </Suspense>
        ),
      },
      {
        path: "/articleEdit",
        element: (
          <Suspense fallback={"加载中..."}>
            <ArticleEdit />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
