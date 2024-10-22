function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Adjust Breakpoints
    screens: {
      xsss: "320px",
      xss: "500px",
      xs: "600px",
      sm: "750px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),

          "accent-variant-one": withOpacity("--color-accent-one"),
          "accent-variant-two": withOpacity("--color-accent-two"),
          "accent-variant-three": withOpacity("--color-accent-three"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),

          "line-variant-one": withOpacity("--color-accent-one"),
          "line-variant-two": withOpacity("--color-accent-two"),
          "line-variant-three": withOpacity("--color-accent-three"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),

          "line-variant-one": withOpacity("--color-accent-one"),
          "line-variant-two": withOpacity("--color-accent-two"),
          "line-variant-three": withOpacity("--color-accent-three"),
        },
        transparent: "transparent",
      },
      stroke: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
    },

    typography: {
      DEFAULT: {
        css: {
          pre: {
            color: false,
          },
          code: {
            color: false,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
