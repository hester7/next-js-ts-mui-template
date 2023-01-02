import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import styled from "@emotion/styled";

const EmptyDiv = styled.div`
    min-height: 40px;
`;

type ThemeUpdaterProps = {};

export const ThemeUpdater = (props: ThemeUpdaterProps) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return <EmptyDiv></EmptyDiv>;

    const toggleMode = () => setTheme(resolvedTheme === "light" ? "dark" : "light");

    return (
        <Tooltip title={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}>
            <IconButton aria-label="mode" size="medium" onClick={toggleMode}>
                {resolvedTheme === "light" ? <DarkModeIcon fontSize="inherit" /> : <LightModeIcon fontSize="inherit" />}
            </IconButton>
        </Tooltip>
    );
};
