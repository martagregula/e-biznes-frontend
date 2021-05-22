import React from "react";
import {RecordInCart} from "./RecordInCart";
import {Box, Button, Card, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        minHeight: "20vh",
        width: "60vw",
        outlineColor: "blue",
        border: "#C8C8C8 1px solid",
        paddingTop: "0.5%",
        paddingBottom: "1vh",
        margin: "5vh 0vh 5vh 0vh",
    },
}));

export const CartComponent: React.FC = props => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            alignSelf="center"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            style={{minHeight: "90vh"}}
        >
            <Typography variant="h3" className="titleStyle">
                Koszyk
            </Typography>

            <Card className={classes.paperStyle} variant="outlined">
                <Box style={{minHeight: "18vh"}}>
                    <RecordInCart/>
                </Box>

                <div style={{margin: "1%"}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="medium"
                        style={{marginRight: "5%"}}
                        //component={Link}
                        //to="/"
                    >
                        Anuluj
                    </Button>

                    <Button variant="contained" size="medium" color="primary">
                        Kup
                    </Button>
                </div>
            </Card>
        </Box>
    );
}