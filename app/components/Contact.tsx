'use client'

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section className="py-20 bg-charcoal-dark">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                            Ready to <span className="gradient-text">Deploy</span>?
                        </h2>
                        <p className="text-xl text-gray-300 font-inter">
                            Connect with our technical team to discuss your mission requirements
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-charcoal border border-charcoal-light rounded-lg focus:border-primary focus:outline-none text-white"
                                        placeholder="Your organization name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Contact Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-charcoal border border-charcoal-light rounded-lg focus:border-primary focus:outline-none text-white"
                                        placeholder="contact@organization.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Mission Requirements
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 bg-charcoal border border-charcoal-light rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                                        placeholder="Describe your operational requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                                >
                                    Submit Inquiry
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold font-poppins mb-6 gradient-text">
                                    Get In Touch
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-primary rounded-full mt-1"></div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Technical Sales</h4>
                                            <p className="text-gray-400">sales@vyomgarud.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-primary rounded-full mt-1"></div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Support</h4>
                                            <p className="text-gray-400">support@vyomgarud.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-primary rounded-full mt-1"></div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">Partnership</h4>
                                            <p className="text-gray-400">partners@vyomgarud.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-charcoal-light pt-8">
                                <h4 className="font-semibold text-white mb-4">Security Clearance</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    All communications are handled through secure channels.
                                    Classified discussions require appropriate clearance verification.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-charcoal-light mt-20 pt-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold font-poppins gradient-text">VyomGarud</h3>
                            <p className="text-gray-400 text-sm">Advanced UAV Systems</p>
                        </div>

                        <div className="text-gray-400 text-sm">
                            © 2024 VyomGarud. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}