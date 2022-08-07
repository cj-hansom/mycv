import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const MyCard = (props) => {
    return (
        <Card style={{
            width: "65%", height: "70%",
            backgroundColor: "transparent",
        }}>
            <CardContent >
                {props.children}
            </CardContent>
        </Card>
    );
}

export default MyCard