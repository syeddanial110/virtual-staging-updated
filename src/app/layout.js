import Providers from "@/store/Provider";
import "./globals.css";
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
