import '@/app/ui/global.css'
import {inter} from "@/app/ui/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let count = 7;
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      {/* <h1>{count}</h1> */}
      {/* <div className='w-full bg-mygreen-800 h-[4rem]'></div> */}
      {/* <div className='w-full bg-mygreen-100 h-[4rem]'></div> */}
      {children}
      </body>
    </html>
  );
}
