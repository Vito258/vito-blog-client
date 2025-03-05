import { createBrowserRouter } from "react-router-dom";
import * as React from "react";
import { Suspense } from "react";
import ArticleEdit from "@/pages/ArticleEdit";
import ArticleDisplay from "@/pages/ArticleDisplay";
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
const LoginPage = React.lazy(() => import("@/pages/Login"));

// 路由菜单
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"加载中..."}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/layout",
    element: (
      <Suspense fallback={"加载中..."}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        // path:'/layout/home',
        element: (
          <Suspense fallback={"加载中..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/layout/about",
        element: (
          <Suspense fallback={"加载中..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/layout/donations",
        element: (
          <Suspense fallback={"加载中..."}>
            <Donations />
          </Suspense>
        ),
      },
      {
        path: "/layout/chatroom",
        element: (
          <Suspense fallback={"加载中..."}>
            <ChatRoom />
          </Suspense>
        ),
      },
      {
        path: "/layout/messages",
        element: (
          <Suspense fallback={"加载中..."}>
            <Messages />
          </Suspense>
        ),
      },
      {
        path: "/layout/notes",
        element: (
          <Suspense fallback={"加载中..."}>
            <NotesAndChats />
          </Suspense>
        ),
      },
      {
        path: "/layout/projectshare",
        element: (
          <Suspense fallback={"加载中..."}>
            <ProjectShare />
          </Suspense>
        ),
      },
      {
        path: "/layout/techtalk",
        element: (
          <Suspense fallback={"加载中..."}>
            <TechTalk />
          </Suspense>
        ),
      },
      {
        path: "/layout/articleEdit",
        element: (
          <Suspense fallback={"加载中..."}>
            <ArticleEdit />
          </Suspense>
        ),
      },
      {
        path: "/layout/articleDisplay",
        element: (
          <Suspense fallback={"加载中..."}>
            <ArticleDisplay />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
