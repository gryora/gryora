import "./globals.css";

export const metadata = {
  title: "GRYORA - Digital Marketing Agency",
  description: "Performance Marketing, SEO, Ads, Branding, Funnels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* GLOBAL GREEN GLOW BACKGROUND */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">

          <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[180px] top-[-100px] left-[-100px]" />

          <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[200px] bottom-[-120px] right-[-120px]" />

        </div>

        {children}

      </body>
    </html>
  );
}