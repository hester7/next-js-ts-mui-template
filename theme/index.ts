import { PaletteOptions, createTheme, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

const baseTheme = {
    palette: {
        primary: { main: "#9147FF" },
        secondary: { main: "#2a48f3" },
        trend: {
            positive: "#098551",
            negative: "#cf202f",
            neutral: "#424242",
        },
    },
    spacing: 4,
    typography: {
        fontSizeTiny: "0.75rem",
        fontSizeSmall: "0.875rem",
        fontSizeMedium: "1rem",
        fontSizeLarge: "1.125rem",
        fontSizeHuge: "1.5rem",
        fontSizeMega: "3rem",
        h1: {
            fontSize: "2.25rem",
        },
        h2: {
            fontSize: "1.25rem",
        },
        h3: {
            fontSize: "1rem",
        },
        h4: {
            fontSize: "1rem",
        },
        h5: {
            fontSize: "1rem",
        },
        h6: {
            fontSize: "1rem",
        },
    },
};

export const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        mode: "light",
    },
});

export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        mode: "dark",
    },
});

export const globalStyles = css`
    :root {
        body {
            background-color: #fff;
            color: #121212;
        }
    }

    [data-theme="dark"] {
        body {
            background-color: #121212;
            color: #fff;
        }
    }
`;
