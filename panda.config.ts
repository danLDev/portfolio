import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./src/recipes/button.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],


  // Useful for theme customization
  theme: {
    recipes: {
      button: buttonRecipe
    },
    tokens: {
      spacing: {
        'x1': {
          value: '0.25rem'
        },
        'x2': {
          value: '0.5rem'
        },
        'x3': {
          value: '0.75rem'
        },
        'x4': {
          value: '1rem'
        },
        'x5': {
          value: '1.25rem'
        },
        'x6': {
          value: '1.5rem'
        },

      },

      colors: {
        orange: {
          900: { value: '#ff8a3d' }
        },
        red: {
          900: {
            value: '#ff4d2e'
          }
        },
        navy: {
          0: { value: '#ccd5e3' },
          100: { value: '#9aacc6' },
          300: { value: '#6782aa' },
          400: { value: '#465b7c' },
          500: {
            value: '#293649'
          },
          600: {
            value: '#0d1117'
          }


        },
        neutral: {
          0: { value: '#ffffff' },
          100: { value: '#d4d4d4' },
          200: { value: '#808080' },
          300: { value: '#555555' },
          400: {
            value: '#2a2a2a'
          },
          900: {
            value: '#000000'
          }
        }
      }
    },
    textStyles: {
      body: {
        sm: {
          regular: {
            value: {
              fontSize: '0.7rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500
            }
          },
          bold: {
            value: {
              fontSize: '0.7rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700
            }
          }

        },
        md: {
          regular: {
            value: {
              fontSize: '1rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500
            }
          },
          bold: {
            value: {
              fontSize: '1rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700
            }
          }

        },
        lg: {
          regular: {
            value: {
              fontSize: '1.5rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500
            }
          },
          bold: {
            value: {
              fontSize: '1.5rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700
            }
          },
        },
        xl: {
          regular: {
            value: {
              fontSize: '2rem',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500
            }
          },
        }
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: '{colors.red.900}'
        },
        dark: {
          value: '{colors.neutral.900}'
        },

      }
    }

    // extend: {
    // },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
