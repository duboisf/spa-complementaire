import React from 'react';
import Typography from "@material-ui/core/Typography/Typography"

interface Props extends Readonly<{ value: number | string }> {}

const Part = (props: Props) => {
    return (
        <Typography variant="h4">{props.value}</Typography>
    )
}

export default Part;
