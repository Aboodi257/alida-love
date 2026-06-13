import React from 'react';
import { motion } from 'framer-motion';

const chronologicalNodes = [
  { label: "First Message ❤️", context: "Where our digital stars aligned and a simple 'hello' shifted our entire gravity." },
  { label: "First Call ☎️", context: "Hours turned into seconds as the cadence of your voice rewrote my concept of safety." },
  { label: "First Smile 😊", context: "The exact moment my soul realized it had stopped searching for a home." },
  { label: "First I Love You 💕", context: "Three whispers, eight characters, and an absolute lifetime commitment spoken aloud." },
  { label: "Our Journey 🌹", context: "Stepping gracefully through parallel realities, writing an unshakeable legacy hand-in-hand." }
];

export default function StoryTimeline() {
  return (
    <section className="timeline-structural-wrapper">
      <h2 className="section-label-heading">Our Milestones</h2>
      <div className="timeline-vertical-spine">
        {chronologicalNodes.map((node, index) => (
          <motion.div 
            className="timeline-block-item" 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
            <div className="timeline-glass-inner-panel">
              <h3>{node.label}</h3>
              <p>{node.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}