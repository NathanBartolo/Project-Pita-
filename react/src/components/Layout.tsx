import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";
import { Outlet } from "react-router-dom";
interface LayoutProps {
  title: string;
}

export const Layout = ({ title }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />
      <main className="flex flex-col py-10 gap-y-20 pt-35 md:pt-40 md:gap-y-32 content bg-surface-a0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
