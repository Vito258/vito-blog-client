import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/roboto"
import { RouterProvider } from 'react-router-dom';
import "../public/core/live2dcubismcore.min.js"
import router from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
