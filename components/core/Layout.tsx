import styled from "@emotion/styled";
import { Divider, IconButton, Stack, Theme, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { ThemeUpdater } from "../theme/ThemeUpdater";
import { AppIcon } from "./AppIcon";

const Root = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0 0 0 #4a4c50, 0 0 0 100vw #292a2d;
`;

const Menubar = styled(Stack)(
    ({ theme }: { theme: Theme }) => `
    height: ${theme.spacing(8.5)};
    padding: ${theme.spacing(1)};
    flex-direction: row;
    align-items: center;
  `
);

const Statusbar = styled(Stack)(
    ({ theme }: { theme: Theme }) => `
    height: ${theme.spacing(6.5)};
    padding: ${theme.spacing(1)};
    flex-direction: row;
    align-items: center;
  `
);

const ControlBar = styled(Stack)`
    flex-direction: row;
    align-items: center;
    margin-left: auto;
`;

const Main = styled.div(
    ({ theme }: { theme: Theme }) => `
    padding: ${theme.spacing(3)};
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
  `
);

type LayoutProps = {
    logoText: string;
    children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
    const { logoText, children } = props;
    const theme = useTheme();
    const router = useRouter();

    return (
        <Root>
            <Menubar theme={theme}>
                <IconButton
                    size="medium"
                    disableRipple
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <AppIcon fontSize="medium" />
                    <Typography
                        fontSize={"1.25rem"}
                        fontWeight={600}
                        sx={() => ({
                            paddingLeft: 1,
                        })}
                    >
                        {logoText}
                    </Typography>
                </IconButton>
                <ControlBar />
                <ThemeUpdater />
            </Menubar>
            <Divider />
            <Main theme={theme}>{children}</Main>
            <Divider />
            <Statusbar theme={theme}></Statusbar>
        </Root>
    );
};
