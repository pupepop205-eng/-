import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import { HomePage } from "../routes/HomePage";
import { PrivacyPage } from "../routes/PrivacyPage";
import { NotFoundPage } from "../routes/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/privacy", element: <PrivacyPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
