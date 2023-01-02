import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, globalStyles, lightTheme } from "../../theme";
import { useEffect, useState } from "react";

type MuiThemeProviderProps = {
    children: React.ReactNode;
};

export const MuiThemeProvider = ({ children }: MuiThemeProviderProps) => {
    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    useEffect(() => {
        resolvedTheme === "light" ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <GlobalStyles styles={globalStyles} />
            {children}
        </ThemeProvider>
    );
};
