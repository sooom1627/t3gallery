import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 ">
      <div className="tex-xl font-semibold">Gallery</div>
      <div>Sign in</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} flex flex-col gap-4 font-sans`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
