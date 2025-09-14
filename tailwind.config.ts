import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				},
				// Pixel Paradox theme colors
				'void-black': 'hsl(var(--void-black))',
				'neon-magenta': 'hsl(var(--neon-magenta))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
				'pacman-yellow': 'hsl(var(--pacman-yellow))',
				'pixel-white': 'hsl(var(--pixel-white))',
				'ghost-grey': 'hsl(var(--ghost-grey))',
				'error-red': 'hsl(var(--error-red))',
				'success-green': 'hsl(var(--success-green))'
			},
			fontFamily: {
				'pixel-header': ['Press Start 2P', 'monospace'],
				'pixel-body': ['VT323', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Pixel Paradox animations
				'pixel-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pixel-scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pixel-glitch': {
					'0%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-2px, 1px)' },
					'20%': { transform: 'translate(1px, -1px)' },
					'30%': { transform: 'translate(-1px, 2px)' },
					'40%': { transform: 'translate(2px, -2px)' },
					'50%': { transform: 'translate(-2px, -1px)' },
					'60%': { transform: 'translate(1px, 1px)' },
					'70%': { transform: 'translate(-1px, -2px)' },
					'80%': { transform: 'translate(2px, 1px)' },
					'90%': { transform: 'translate(-1px, -1px)' },
					'100%': { transform: 'translate(0, 0)' }
				},
				'pixel-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'pac-chomp': {
					'0%': { clipPath: 'polygon(100% 74%, 44% 48%, 100% 21%)' },
					'25%': { clipPath: 'polygon(100% 60%, 44% 48%, 100% 40%)' },
					'50%': { clipPath: 'polygon(100% 48%, 44% 48%, 100% 48%)' },
					'75%': { clipPath: 'polygon(100% 60%, 44% 48%, 100% 40%)' },
					'100%': { clipPath: 'polygon(100% 74%, 44% 48%, 100% 21%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-fade-in': 'pixel-fade-in 0.6s ease-out',
				'pixel-scale-in': 'pixel-scale-in 0.4s ease-out',
				'pixel-glitch': 'pixel-glitch 0.15s ease-in-out',
				'pixel-float': 'pixel-float 3s ease-in-out infinite',
				'pac-chomp': 'pac-chomp 0.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
