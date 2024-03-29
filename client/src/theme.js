// color design token export

export const colorToken = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000"
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    }
}

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                //palette values for dark mode
                primary:{
                    dark: colorToken.primary[200],
                    main: colorToken.primary[500],
                    light: colorToken.primary[800],
                },
                neutral: {
                    dark: colorToken.grey[100],
                    main: colorToken.grey[200],
                    meduimMain: colorToken.grey[300],
                    meduim: colorToken.grey[400],
                    light: colorToken.grey[700],
                },
                background: {
                    default: colorToken.grey[900],
                    alt : colorToken.grey[800],
                }
            } : {
                // palette values for light mode
                primary:{
                    dark: colorToken.primary[700],
                    main: colorToken.primary[500],
                    light: colorToken.primary[50],
                },
                neutral: {
                    dark: colorToken.grey[700],
                    main: colorToken.grey[500],
                    meduimMain: colorToken.grey[400],
                    meduim: colorToken.grey[300],
                    light: colorToken.grey[50],
                },
                background: {
                    default: colorToken.grey[10],
                    alt : colorToken.grey[0],
                }
            })
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6:{
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}