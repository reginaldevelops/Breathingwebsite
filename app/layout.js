import "./globals.css";
import Nav from "../components/Nav";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "#1 TikTok Breathing Channel",
  description: "Control Your Breath And Master Everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Nav />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
