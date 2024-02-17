import Header from "@/components/header/Header";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Home | DedxNotes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto p-4">
            <Header />
            <main className="mt-5">{children}</main>
            <Toaster richColors position="bottom-right" />
            {/* footer  */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
