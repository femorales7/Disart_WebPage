import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (<></>
    // <div className="app__header  app__flex">
    //   <motion.div
    //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //     transition={{ duration: 0.5 }}
    //     className="app__header-info"
    //   >
    //     <div className="app__header-badge">
    //       <div className="badge-cmo app__flex">
    //         <span>👋🏻</span>
    //         <div style={{ marginLeft: 20 }}>
    //           <p className="p-text">Hello, I am</p>
    //           <h1 className="head-text">Diana</h1>
    //         </div>
    //       </div>
    //       <div className="tag-cmp app__flex">
    //         <p className="p-text">Grafical designer</p>
    //         <p className="p-text">amazing styles</p>
    //       </div>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     whileInView={{ opacity: [0, 1] }}
    //     transition={{ duration: 0.5, delayChildren: 0.5 }}
    //     className="app__header-img"
    //   >
    //     {/* <img src={images.MainPage} alt="MainPage_bg" /> */}
    //     <motion.img 
    //     whileInView={{scale:[0, 1]}}
    //     transition={{duration:1, ease:'easeInOut'}}
    //     className="app__header-img"
    //     src="ima">

    //     </motion.img>
    //   </motion.div>
    // </div>
  );
};

export default Header;
