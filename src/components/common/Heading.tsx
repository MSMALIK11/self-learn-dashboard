import { Typography } from "@mui/material";

interface props {
    text?: string;
    size?: string;
    color?: string;
    bold?: string;
    me?: string;
    mt?: string,
    indent?: string;
    wrap?: string;
    mb?: string,
    width?: string,
}

const Heading = (props: props) => {
    return (
        <Typography
            style={{
                fontSize: props.size ? props.size : "14px",
                color: props.color,
                fontWeight: props.bold,
                textIndent: props.indent,
                marginRight: props.me,
                marginBottom: props.mb,
                marginTop: props.mt,
                letterSpacing: '0.3px'


            }}
        >
            {props.text}
        </Typography>
    );
};

export default Heading;
