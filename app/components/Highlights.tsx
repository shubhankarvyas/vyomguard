'use client'

import { motion } from 'framer-motion'

const highlights = [
    {
        title: "99.9% Mission Success Rate",
        description: "Proven reliability in critical operations worldwide"
    },
    {
        title: "Advanced AI Integration",
        description: "Next-generation autonomous decision-making capabilities"
    },
    {
        title: "Rapid Deployment Ready",
        description: "Field-ready systems with minimal setup requirements"
    }
]

export default function Highlights() {
    return (
        <section className="py-20 bg-charcoal relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-64 h-64 border border-primary rotate-45"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary rotate-12"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                        Why Choose <span className="gradient-text">VyomGarud</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="bg-gradient-to-br from-charcoal-dark to-charcoal border border-primary/30 rounded-xl p-8 card-hover">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                                    <div className="w-8 h-8 bg-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-poppins gradient-text">
                                    {highlight.title}
                                </h3>

                                <p className="text-gray-300 font-inter leading-relaxed">
                                    {highlight.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button className="bg-primary hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Request Technical Specifications
                    </button>
                </motion.div>
            </div>
        </section>
    )
}