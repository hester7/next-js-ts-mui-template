import { SvgIcon } from "@mui/material";
import { DefaultComponentProps, OverridableTypeMap } from "@mui/material/OverridableComponent";

interface AppIconProps extends OverridableTypeMap {}

export const AppIcon = (props: DefaultComponentProps<AppIconProps>) => {
    return (
        <SvgIcon viewBox="0 0 512 512" color="primary" {...props}>
            <path fillRule="evenodd" d="M256,48,496,464H16Z" />
        </SvgIcon>
    );
};
