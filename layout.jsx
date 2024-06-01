import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import favicon from "@/public/favicon/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Dev - Energizing Coffee for Coders",
  description: "Discover the perfect coffee blend for staying active and coding. Coffee Dev offers premium brews to keep you energized and focused.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Header />
      </body>
    </html >
  );
}
