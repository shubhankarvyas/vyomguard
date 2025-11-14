'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}></div>
            </div>

            {/* Floating 3D Geometric Shapes */}
            <div className="absolute inset-0">
                {/* Large rotating hexagon */}
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30"
                    style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
                    }}
                    animate={{
                        rotate: 360,
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Medium floating cube */}
                <motion.div
                    className="absolute top-1/3 right-32 w-24 h-24 border border-primary/40"
                    animate={{
                        rotateX: 360,
                        rotateY: 360,
                        x: [-15, 15, -15],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: 12, repeat: Infinity, ease: "linear" },
                        x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Small triangle */}
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-primary/50"
                    style={{
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}
                    animate={{
                        rotate: -360,
                        y: [-25, 25, -25],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Floating circles */}
                <motion.div
                    className="absolute top-1/2 left-10 w-12 h-12 border border-primary/60 rounded-full"
                    animate={{
                        x: [-30, 30, -30],
                        y: [-20, 20, -20],
                        scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-20 right-20 w-20 h-20 border-2 border-primary/40 rounded-full"
                    animate={{
                        x: [20, -20, 20],
                        y: [15, -15, 15],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Diagonal lines */}
                <motion.div
                    className="absolute top-40 right-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    animate={{
                        rotate: [0, 180, 360],
                        scaleX: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Pulsing dots */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/60 rounded-full"
                        style={{
                            top: `${20 + (i * 10)}%`,
                            right: `${10 + (i * 8)}%`,
                        }}
                        animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Particle System */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/40 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-100, 1000],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold font-poppins mb-6"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(255, 123, 0, 0.5)",
                                "0 0 40px rgba(255, 123, 0, 0.8)",
                                "0 0 20px rgba(255, 123, 0, 0.5)"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="gradient-text">VyomGarud</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Military-Grade UAV Systems. Precision Engineering. Advanced Autonomy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
                    >
                        <motion.button
                            className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            whileHover={{
                                boxShadow: "0 0 30px rgba(255, 123, 0, 0.6)",
                                scale: 1.05
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Systems
                        </motion.button>
                        <motion.button
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                            whileHover={{
                                boxShadow: "0 0 20px rgba(255, 123, 0, 0.4)",
                                scale: 1.02
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Enhanced Floating Drone */}
                <motion.div
                    className="absolute top-1/4 right-10 w-20 h-20 opacity-60"
                    animate={{
                        y: [-15, 15, -15],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <div className="w-full h-full border-2 border-primary rounded-full flex items-center justify-center relative">
                        <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                        {/* Drone propellers */}
                        <motion.div
                            className="absolute -top-2 -left-2 w-4 h-4 border border-primary/60 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -top-2 -right-2 w-4 h-4 border border-primary/60 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -bottom-2 -left-2 w-4 h-4 border border-primary/60 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute -bottom-2 -right-2 w-4 h-4 border border-primary/60 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Ambient Light Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        </section>
    )
}