'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface DumpsterButtonProps {
  onClick: () => void
}

export default function DumpsterButton({ onClick }: DumpsterButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    // Full animation sequence: 
    // 1. Truck backs in with dumpster
    // 2. Tilts and drops dumpster behind truck
    // 3. Drives forward away from dumpster
    // 4. Backs in to dumpster again
    // 5. Picks up dumpster
    // 6. Drives away with dumpster
    setTimeout(() => {
      onClick()
      setTimeout(() => setIsClicked(false), 1000)
    }, 5000) // Faster animation
  }

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        className="relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {!isClicked ? (
            <motion.div
              key="button"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="btn-primary text-lg md:text-xl"
            >
              Rent a Dumpster
            </motion.div>
          ) : (
            <motion.div
              key="dumpster-truck"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="px-2 sm:px-4 py-4 overflow-hidden w-full max-w-md mx-auto"
            >
              {/* Animated Truck & Dumpster SVG - Fully responsive */}
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 320 120"
                preserveAspectRatio="xMidYMid meet"
                className="drop-shadow-[0_0_20px_rgba(255,107,53,0.6)] max-h-32 sm:max-h-40"
              >
                {/* Complete Scene - Truck Movement */}
                <motion.g
                  initial={{ x: 80 }}
                  animate={{
                    x: isClicked ? [80, 80, 80, 80, 120, 120, 80, 80, -150] : 80
                  }}
                  transition={{
                    duration: 4.5,
                    times: [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.75, 1],
                    ease: "easeInOut"
                  }}
                >
                  {/* Truck */}
                  <g>
                    {/* Truck Cab */}
                    <rect
                      x="10"
                      y="45"
                      width="35"
                      height="25"
                      fill="#1a1a1a"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      rx="2"
                    />
                    {/* Cab Window */}
                    <rect
                      x="15"
                      y="48"
                      width="12"
                      height="10"
                      fill="#4a9eff"
                      stroke="#D4AF37"
                      strokeWidth="1"
                      rx="1"
                    />
                    {/* Grille */}
                    <rect
                      x="42"
                      y="55"
                      width="3"
                      height="12"
                      fill="#D4AF37"
                    />

                    {/* Truck Chassis/Bed */}
                    <rect
                      x="45"
                      y="50"
                      width="60"
                      height="20"
                      fill="#0a0a0a"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />

                    {/* Hydraulic Lift System - animates with bed tilt */}
                    <motion.g
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={isClicked ? {
                        opacity: [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
                        rotate: [0, 0, 0, 30, 0, 0, 0, 30, 0, 0]
                      } : { opacity: 0, rotate: 0 }}
                      transition={{
                        duration: 4.5,
                        times: [0, 0.05, 0.1, 0.2, 0.25, 0.45, 0.55, 0.65, 0.7, 0.75]
                      }}
                      style={{ originX: '100px', originY: '70px' }}
                    >
                      {/* Main hydraulic arm */}
                      <line
                        x1="100"
                        y1="70"
                        x2="100"
                        y2="45"
                        stroke="#D4AF37"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Secondary support */}
                      <line
                        x1="95"
                        y1="70"
                        x2="95"
                        y2="50"
                        stroke="#B8960F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.g>

                    {/* Truck Wheels */}
                    <circle cx="25" cy="72" r="7" fill="#1a1a1a" stroke="#D4AF37" strokeWidth="2" />
                    <circle cx="25" cy="72" r="3" fill="#D4AF37" />
                    <motion.circle
                      cx="25"
                      cy="72"
                      r="3"
                      fill="#D4AF37"
                      animate={isClicked ? { rotate: 360 } : {}}
                      transition={{ duration: 4, ease: "linear" }}
                    />

                    <circle cx="90" cy="72" r="7" fill="#1a1a1a" stroke="#D4AF37" strokeWidth="2" />
                    <circle cx="90" cy="72" r="3" fill="#D4AF37" />

                    {/* Company Logo on truck */}
                    <text
                      x="65"
                      y="62"
                      fontSize="8"
                      fill="#D4AF37"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      HIGGS
                    </text>
                  </g>

                  {/* Dumpster - starts ON truck, drops off BEHIND truck (to the right), gets picked up again */}
                  <motion.g
                    initial={{ rotate: 0, x: 0, y: 0 }}
                    animate={isClicked ? {
                      // Starts on truck -> drops off BEHIND (to the right) -> stays on ground -> gets picked up -> back on truck
                      rotate: [0, 0, 15, 15, 0, 0, 0, 15, 0, 0],
                      x: [0, 0, 80, 80, 80, 80, 80, 80, 0, 0],
                      y: [0, 0, 5, 22, 22, 22, 22, 5, 0, 0]
                    } : { rotate: 0, x: 0, y: 0 }}
                    transition={{
                      duration: 4.5,
                      times: [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85],
                      ease: "easeOut"
                    }}
                    style={{ originX: '130px', originY: '70px' }}
                  >
                    {/* Dumpster Container - lying flat on truck bed - CONSTRUCTION ORANGE! */}
                    <rect
                      x="50"
                      y="28"
                      width="75"
                      height="22"
                      fill="#FF6B35"
                      stroke="#D4AF37"
                      strokeWidth="2"
                      rx="1"
                    />

                    {/* Container Ribs - vertical when lying flat */}
                    <line x1="62" y1="28" x2="62" y2="50" stroke="#E85A2A" strokeWidth="1.5" />
                    <line x1="75" y1="28" x2="75" y2="50" stroke="#E85A2A" strokeWidth="1.5" />
                    <line x1="88" y1="28" x2="88" y2="50" stroke="#E85A2A" strokeWidth="1.5" />
                    <line x1="101" y1="28" x2="101" y2="50" stroke="#E85A2A" strokeWidth="1.5" />
                    <line x1="114" y1="28" x2="114" y2="50" stroke="#E85A2A" strokeWidth="1.5" />

                    {/* Top/Side Rails */}
                    <rect
                      x="50"
                      y="26"
                      width="75"
                      height="3"
                      fill="#D4AF37"
                      rx="0.5"
                    />
                    <rect
                      x="50"
                      y="49"
                      width="75"
                      height="3"
                      fill="#D4AF37"
                      rx="0.5"
                    />

                    {/* Hook/Chain Points at rear */}
                    <circle cx="120" cy="28" r="2.5" fill="#FFD700" stroke="#D4AF37" strokeWidth="1" />
                    <circle cx="120" cy="50" r="2.5" fill="#FFD700" stroke="#D4AF37" strokeWidth="1" />

                    {/* Front end detail */}
                    <rect
                      x="48"
                      y="28"
                      width="3"
                      height="22"
                      fill="#E85A2A"
                    />
                  </motion.g>

                  {/* Ground Shadows */}
                  {/* Truck shadow - moves with truck */}
                  <motion.ellipse
                    cx="60"
                    cy="78"
                    rx="50"
                    ry="4"
                    fill="rgba(0,0,0,0.3)"
                  />

                  {/* Dumpster shadow - starts on truck, follows dumpster to the right behind truck */}
                  <motion.ellipse
                    initial={{ cx: 88, cy: 76, rx: 38, ry: 3 }}
                    animate={isClicked ? {
                      cx: [88, 88, 168, 168, 168, 168, 168, 168, 88, 88],
                      cy: [76, 76, 77, 84, 84, 84, 84, 77, 76, 76],
                      rx: [38, 38, 36, 38, 40, 40, 40, 38, 38, 38],
                      opacity: [0.3, 0.3, 0.28, 0.35, 0.35, 0.35, 0.35, 0.28, 0.3, 0.3]
                    } : { cx: 88, cy: 76, rx: 38, opacity: 0.3 }}
                    transition={{
                      duration: 4.5,
                      times: [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85]
                    }}
                    ry="3"
                    fill="rgba(0,0,0,0.3)"
                  />
                </motion.g>

                {/* Sparkle effects when hovering - Gold and Orange */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      <motion.circle
                        cx="20"
                        cy="15"
                        r="2"
                        fill="#D4AF37"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                      />
                      <motion.circle
                        cx="180"
                        cy="20"
                        r="2"
                        fill="#FF6B35"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.circle
                        cx="100"
                        cy="10"
                        r="2"
                        fill="#D4AF37"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                      />
                      <motion.circle
                        cx="280"
                        cy="18"
                        r="2"
                        fill="#FF6B35"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.9 }}
                      />
                    </>
                  )}
                </AnimatePresence>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Hover text hint */}
      <AnimatePresence>
        {isHovered && !isClicked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-construction-orange text-sm font-bold uppercase tracking-wide orange-glow"
          >
            Click to roll!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

