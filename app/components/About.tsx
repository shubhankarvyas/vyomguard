'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="py-20 bg-charcoal">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8">
                        About <span className="gradient-text">VyomGarud</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-inter">
                        VyomGarud represents the pinnacle of unmanned aerial vehicle technology,
                        delivering military-grade precision and reliability for critical missions.
                        Our advanced autonomous systems are engineered to exceed the most demanding
                        operational requirements.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-primary rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-poppins">Precision</h3>
                            <p className="text-gray-400">Millimeter-accurate positioning and control systems</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-primary rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-poppins">Reliability</h3>
                            <p className="text-gray-400">Military-grade components for mission-critical operations</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-primary rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 font-poppins">Autonomy</h3>
                            <p className="text-gray-400">Advanced AI-driven decision making and navigation</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}