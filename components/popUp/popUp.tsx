"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Type definition for the PopUp props
interface PopUpProps {
  component: React.ReactNode | null;
  children: React.ReactNode;
  state: boolean;
  setState: (state: boolean) => void;
  maxWidth?: string;
  maxHeight?: string;
  width?: string;
  height?: string;
}

const PopUp: React.FC<PopUpProps> = ({
  component = null,
  children,
  state,
  setState,
  maxWidth = "w-fit", // default max width
  maxHeight = "max-h-screen", // default max height
  width = "w-full", // default to full width of the viewport
  height = "h-auto", // default height
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  // Close the pop-up when clicking outside of the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setState]);

  const closePopUp = () => {
    setState(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50 space-y-4 ">
      {/* Modal */}
      <AnimatePresence>
        {state && (
          <>
            <motion.div
              className={`bg-white rounded-md shadow-lg  relative ${width} ${maxWidth} overflow-hidden`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Component or children passed into the PopUp */}
              <div
                ref={componentRef}
                className={`overflow-y-auto ${maxHeight} ${height} max-w-full`}
              >
                {component}
                {children}
              </div>
            </motion.div>

            <motion.button
              onClick={closePopUp}
              className="backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-30 text-white text-xl p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
              
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              &#10005;
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopUp;
