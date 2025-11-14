'use client'

import { motion } from 'framer-motion'

const capabilities = [
    {
        title: "Tactical Surveillance",
        description: "Advanced reconnaissance systems with real-time intelligence gathering and secure data transmission.",
        features: ["4K Thermal Imaging", "Encrypted Communications", "Extended Range Operations"]
    },
    {
        title: "Autonomous Navigation",
        description: "AI-powered flight systems capable of complex mission execution without human intervention.",
        features: ["GPS-Denied Navigation", "Obstacle Avoidance", "Mission Planning AI"]
    },
    {
        title: "Payload Integration",
        description: "Modular payload systems designed for diverse mission requirements and rapid deployment.",
        features: ["Multi-Sensor Arrays", "Rapid Deployment", "Custom Configurations"]
    },
    {
        title: "Command & Control",
        description: "Secure ground control systems with intuitive interfaces for mission management.",
        features: ["Real-time Monitoring", "Multi-UAV Control", "Secure Protocols"]
    }
]

export default function Capabilities() {
    return (
        <section className="py-20 bg-charcoal-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                        Core <span className="gradient-text">Capabilities</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
                        Engineered for excellence across diverse operational environments
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-charcoal border border-charcoal-light rounded-lg p-6 card-hover"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-6 h-6 bg-primary rounded"></div>
                            </div>

                            <h3 className="text-xl font-semibold mb-3 font-poppins text-white">
                                {capability.title}
                            </h3>

                            <p className="text-gray-400 mb-4 font-inter">
                                {capability.description}
                            </p>

                            <ul className="space-y-2">
                                {capability.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}