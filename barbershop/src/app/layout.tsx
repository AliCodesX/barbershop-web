import "../app/globals.css";
import { robotoSlab } from '../app/fonts'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className} antialiased`}>{children}</body>
    </html>
  );
}