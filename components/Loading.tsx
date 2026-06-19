'use client'
import Image from "next/image";
import { motion } from 'motion/react'

export default function Loading(){
  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Image
        className="block absolute top-72 left-0 right-0 m-auto"
        src="/images/common/logo_netflix.svg"
        alt="NETFLIX"
        width={207}
        height={56}
      />
    </motion.div>
  );
}