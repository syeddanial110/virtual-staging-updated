import "./globals.css";
import theme from "@/theme/theme";
import favIcon from "../../public/favicon.png";
import Head from "next/head";
import Providers from "@/store/Provider";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";

export const metadata = {
  title: "Chris",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeWrapper>{children}</ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
