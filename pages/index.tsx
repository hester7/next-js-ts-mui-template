import { Stack, Typography } from "@mui/material";
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

    const text = toTitleCase(`${resolvedTheme} mode`);

    return (
        <Stack justifyContent="center" alignItems="center" gap={2} width="100%" height="100%">
            {mounted ? (
                <Typography
                    variant="h1"
                    sx={(theme) => ({
                        color: findClosestAccessibleColor("#DCDCDC", theme.palette.background.default),
                    })}
                >
                    {text}
                </Typography>
            ) : (
                <div></div>
            )}
        </Stack>
    );
};

export default HomePage;
