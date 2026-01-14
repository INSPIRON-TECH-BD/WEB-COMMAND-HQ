import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

export const RefinedLogo: React.FC<LogoProps> = ({ className, size = 40 }) => (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
        {/* ICON NODE */}
        <div className="relative">
            {/* Multi-stage Neon Aura */}
            <div className="absolute -inset-2 bg-aqua/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -inset-1 bg-aqua/10 blur-md rounded-full group-hover:bg-aqua/30 transition-all duration-700" />
            
            <svg
                viewBox="0 0 500 500"
                width={size}
                height={size}
                className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                aria-label="Inspiron Icon"
            >
                <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#008b8b" />
                    </linearGradient>
                </defs>
                <path
                    d="M170.513,390.122c19.041-28.67,153.424-248.52,173.058-275.708,8.149-8.949,19.75-15.307,32.112-15.447,27.55-1.022,48.705,28.922,35.652,54.215-9.11,17.609-14.589,23.714-34.219,56.237-53.038,84.66-128.452,208.551-146.379,234.648-53.063,74.719-163.653,75.626-212.52-3.604-21.821-35.207-24.321-79.579-5.97-117.163,17.907-33.149,99.941-162.985,138.482-226.749,3.662-6.055,6.767-11.057,11.824-16.692,33.443-38.943,96.644-41.399,127.064,2.159,7.858,11.358,12.948,24.767,14.777,38.353.442,3.958-.9,7.273-2.987,10.53-4.825,7.815-14.609,23.603-23.061,37.262-3.023,4.883-5.876,9.492-8.271,13.36-3.7,5.178-5.834,12.552-9.921,8.732-9.712-11.301-18.25-29.614-26.856-42.475-4.833-7.492-14.847-9.796-20.424-2.324-12.261,19.54-89.812,146.075-101.454,164.856-5.259,8.522-12.601,20.202-18.389,29.502-4.836,7.888-9.188,14.126-11.624,20.789-7.631,18.434-.851,40.294,15.896,51.202,27.122,17.669,57.146,3.423,73.128-21.567l.081-.116Z"
                    fill="url(#iconGradient)"
                />
                <circle cx="418.478" cy="46.739" r="46.739" fill="#fc0" className="animate-pulse" />
            </svg>
        </div>

        {/* TYPOGRAPHY NODE */}
        <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-white uppercase font-montserrat group-hover:text-white transition-colors">
                INSPIRON
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-aqua uppercase font-mono mt-1 group-hover:tracking-[0.6em] transition-all duration-700">
                TECHNOLOGIES
            </span>
        </div>
    </div>
);
