import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../constants/navLinks";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const curruntPath = location.pathname;
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex w-full top-0 right-0 h-screen  bg-ct-black shadow-lg z-40 p-6"
          >
            <ul className="space-y-6 mt-12 text-lg font-semibold text-ct-black w-full text-center ">
              {navLinks
                ? navLinks.map((link, index) => (
                    <div>
                      <Link className="" to={link.path}>
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className={`w-full p-3 rounded-full ${
                            curruntPath === link.path
                              ? "bg-ct-yellow text-ct-black"
                              : "outline-1 outline-ct-yellow text-ct-yellow"
                          }`}
                          onClick={onClose}
                        >
                          {link.name}
                        </motion.li>
                      </Link>
                    </div>
                  ))
                : null}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
