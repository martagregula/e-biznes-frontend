import React from "react";
import {Box, IconButton} from "@material-ui/core";
import {Add, Remove, Delete} from "@material-ui/icons";

export const RecordInCart: React.FC = props => {
    return (
        <div>
            <Box display="flex"
                 justifyContent="space-evenly">
                <h3>Nazwa</h3>
                <h3>Ilość</h3>
                <h3>Cena</h3>

                <IconButton color="primary" aria-label="add to shopping cart">
                    <Add/>
                </IconButton>
                <IconButton aria-label="remove shopping cart" color="secondary">
                    <Remove/>
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                    <Delete/>
                </IconButton>
            </Box>
        </div>
    );
}