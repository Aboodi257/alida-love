import React from 'react';
import { motion } from 'framer-motion';

const floatingPills = [
  "You are my favorite notification 📱",
  "My safe place 🛡️",
  "My best friend 🫂",
  "My home 🏡",
  "My forever ♾️"
];

// 🌸 "export default" added right here to wipe out the error!
export default function CuteMessages() {
  return (
    <section className="pills-ambient-array-block">
      <h2 className="section-label-heading">🌸 Ethereal Realities 🌸</h2>
      <div className="staggered-pills-flex-layout">
        {floatingPills.map((pillText, index) => (
          <motion.div
            className="romantic-pill-glass-card"
            key={index}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, cubicBezier: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(255, 117, 143, 0.25)" }}
          >
            {pillText}
          </motion.div>
        ))}
      </div>
    </section>
  );
}