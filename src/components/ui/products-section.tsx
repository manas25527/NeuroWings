'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const products = [
    {
        title: 'Child Safety Tracker',
        subtitle: 'GPS Monitoring & Alert',
        description: 'Advanced real-time wearable tracker ensuring child safety with geo-fencing and instant SOS alerts.',
    },
    {
        title: 'DPDP Compliance',
        subtitle: 'Data Protection Tool',
        description: 'Comprehensive software solution for managing complete compliance with the Digital Personal Data Protection Act.',
    },
    {
        title: 'Underwater Drone',
        subtitle: 'Aquatic Intelligence',
        description: 'Autonomous submarine drone equipped with high-resolution sensors for underwater mapping and surveillance.',
    },
    {
        title: 'AI Signature',
        subtitle: 'Verification System',
        description: 'Deep-learning powered forensic tool that detects forgeries and authenticates signatures with pinpoint accuracy.',
    }
];

export function ProductsSection() {
    return (
        <section className="py-20 md:py-32 w-full relative z-10 bg-white dark:bg-slate-900/50">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 dark:from-slate-800/20 to-transparent pointer-events-none" />
            
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedContainer className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Products</span>
                    </h2>
                    <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        Discover our suite of advanced intelligent solutions designed to protect, analyze, and empower.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <AnimatedContainer 
                            key={index}
                            delay={0.1 + (index * 0.1)} 
                            className="flex flex-col rounded-[2rem] bg-white dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 shadow-xl shadow-blue-900/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Video Placeholder Section */}
                            <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-400 bg-gradient-to-br from-[#f0f5ff] dark:from-slate-700 to-blue-100 dark:to-slate-800 group-hover:scale-105 transition-transform duration-700">
                                    <svg className="w-10 h-10 mb-2 text-blue-200 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                    <span className="font-semibold text-[10px] tracking-widest uppercase opacity-70">Video Space</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-1">{product.title}</h3>
                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{product.subtitle}</p>
                                </div>
                                <p className="text-blue-900/80 dark:text-slate-300 font-light text-sm leading-relaxed mb-6 flex-1">
                                    {product.description}
                                </p>
                                
                                <button className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group/btn">
                                    Explore details
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string, delay?: number, children: React.ReactNode, key?: React.Key }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
