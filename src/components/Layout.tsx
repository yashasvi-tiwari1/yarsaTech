import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <motion.div
        className={'bg-white dark:bg-black text-black dark:text-white'}
      key={router.route}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
