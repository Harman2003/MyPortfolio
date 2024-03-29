import { useEffect } from "react";
import { Greeting } from "@/components";
import Lenis from "@studio-freight/lenis";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full h-full">
      <Greeting />
      {children}
    </div>
  );
};
