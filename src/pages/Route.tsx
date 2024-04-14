import { createBrowserRouter,Outlet } from "react-router-dom";
import Button from "../components/Button";
import Info from "../components/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Button/>,
    
    children: [
      {
        path: "info",
        element: <Info />,
        
      },
      {
        path: "x",
        element: <>x</>,
        
      },
    ],
  },
]);