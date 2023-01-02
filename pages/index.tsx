import { css, Typography } from "@mui/material";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { toTitleCase } from "../utils/string";
import { findClosestAccessibleColor } from "../utils/a11y";
import { useEffect, useState } from "react";

const HomePage: NextPage = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <div
                css={css`
                    min-height: 40px;
                `}
            ></div>
        );

    const text = toTitleCase(`${resolvedTheme} mode`);

    return (
        <main
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
            `}
        >
            <div
                css={css`
                    display: grid;
                    grid-gap: 8px;
                `}
            >
                <Typography
                    variant="h1"
                    sx={(theme) => ({
                        color: findClosestAccessibleColor("#f7931a", theme.palette.background.default),
                    })}
                >
                    {text}
                </Typography>
            </div>
        </main>
    );
};

export default HomePage;
