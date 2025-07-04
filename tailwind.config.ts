import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  			display: ['Poppins', 'system-ui', 'sans-serif'],
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
  			'7xl': ['4.5rem', { lineHeight: '1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem',
  			'144': '36rem',
  		},
  		screens: {
  			'xs': '475px',
  			'3xl': '1600px',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' }
  			},
  			'fade-in-up': {
  				'0%': { opacity: '0', transform: 'translateY(30px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-down': {
  				'0%': { opacity: '0', transform: 'translateY(-30px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'fade-in-left': {
  				'0%': { opacity: '0', transform: 'translateX(-30px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'fade-in-right': {
  				'0%': { opacity: '0', transform: 'translateX(30px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'slide-up': {
  				'0%': { transform: 'translateY(100%)' },
  				'100%': { transform: 'translateY(0)' }
  			},
  			'bounce-in': {
  				'0%': { opacity: '0', transform: 'scale(0.3)' },
  				'50%': { opacity: '1', transform: 'scale(1.05)' },
  				'70%': { transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-20px)' }
  			},
  			'gradient-shift': {
  				'0%, 100%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' }
  			},
  			'shimmer': {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' }
  			},
  			'wiggle': {
  				'0%, 100%': { transform: 'rotate(-3deg)' },
  				'50%': { transform: 'rotate(3deg)' }
  			},
  			'heartbeat': {
  				'0%': { transform: 'scale(1)' },
  				'14%': { transform: 'scale(1.3)' },
  				'28%': { transform: 'scale(1)' },
  				'42%': { transform: 'scale(1.3)' },
  				'70%': { transform: 'scale(1)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
  			'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
  			'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
  			'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
  			'scale-in': 'scale-in 0.5s ease-out forwards',
  			'slide-up': 'slide-up 0.6s ease-out forwards',
  			'bounce-in': 'bounce-in 0.8s ease-out forwards',
  			'float': 'float 3s ease-in-out infinite',
  			'gradient-shift': 'gradient-shift 3s ease infinite',
  			'shimmer': 'shimmer 1.5s infinite',
  			'wiggle': 'wiggle 1s ease-in-out infinite',
  			'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'spin-slow': 'spin 3s linear infinite',
  			'bounce-slow': 'bounce 3s infinite'
  		},
  		transitionDuration: {
  			'2000': '2000ms',
  			'3000': '3000ms',
  			'4000': '4000ms',
  			'5000': '5000ms',
  		},
  		transitionDelay: {
  			'2000': '2000ms',
  			'3000': '3000ms',
  			'4000': '4000ms',
  			'5000': '5000ms',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
