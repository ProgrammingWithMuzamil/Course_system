import SideBar from "@/components/SideBar";
import "../../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body className="flex">
        <SideBar />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
