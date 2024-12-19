import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
