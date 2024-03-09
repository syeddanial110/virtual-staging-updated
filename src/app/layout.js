import "./globals.css";
import theme from "@/theme/theme";
import favIcon from "../../public/favicon.png";
import Head from "next/head";
import Providers from "@/store/Provider";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Chris",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ThemeWrapper>{children}</ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
