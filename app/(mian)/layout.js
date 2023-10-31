import "../globals.css";
import localFont from "next/font/local";
import MainNav from "@/components/main_nav/MainNav";

const myFont = localFont({
    src: "../../fonts/font.otf",
    display: "swap",
});

export const metadata = {
    title: "comma ride",
    description: "Financial management system",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={myFont.className}>
            <body>
                <MainNav />
                {children}
            </body>
        </html>
    );
}
