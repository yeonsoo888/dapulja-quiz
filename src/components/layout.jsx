import React from "react";
import { motion, AnimatePresence } from 'framer-motion';


export default function Layout({name,children}) {
    return (
        <AnimatePresence>
            <motion.section 
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className={`${name} section`}
            >
                <div className="inner">
                    {children}
                </div>
            </motion.section>
        </AnimatePresence>
    )
}
