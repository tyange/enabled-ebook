import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-screen flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
