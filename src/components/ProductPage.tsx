import React, {useState} from "react";
import {Card, Typography, Box, Button} from "@material-ui/core";
import kawa from "../images/kawa.jpg"
import {RouteComponentProps, withRouter} from "react-router-dom"
import "./styles/ProductPage.css";

type ProductPageParams = {
    id: string;
}

type ProductPageProps = RouteComponentProps<ProductPageParams>

interface State {
    isLoading: boolean
    title: string;
    price: number;
    description: string
}

const description: string = `
Kawa Melitta BellaCrema Speciale to wyjątkowa kompozycja najszlachetniejszych, starannie dobranych ziaren gatunku Arabica (100%). 
Jest to najłagodniejsza mieszanka oferowana przez renomowaną, niemiecką palarnię Melitta. 
Dzięki temu nadaje się ona wręcz idealnie jako podstawa do napojów mlecznych w postaci cappuccino, latte etc. 
Specjalne metody prażanie pozwoliły w jej przypadku wyeliminować zbędną goryczkę oraz kwaskowatość. 
Jak każda pozycja z serii BellaCrema, kawa Melitta BellaCrema Speciale, tworzy na każdej filiżance kawy wyjątkową, grubą i trwałą piankę, która stanowi ukoronowanie jej smaku oraz aromatu. 
Melitta Speciale zadowoli nawet najwybredniejszych smakoszy kawy.
`

const ProductPage: React.FC<ProductPageProps> = ({match}) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, setState] = useState<State>({
        isLoading: true,
        title: "MELITTA BELLACREMA SPECIALE 1 KG",
        price: 35,
        description: description
    })

    return (
        <Box className={"main-container"}>
            <Card style={{minWidth: "90vw", minHeight: "90vh", padding:"2vh 2vw 2vh 2vw"}}>
                <Box style={{display: "flex"}}>
                    <img src={kawa} alt="kawa" width="200px"/>
                    <Box style={{display: "flex", flexDirection:"row", minWidth: "50%", justifyContent:"flex-end"}}>
                        <Box style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <Typography variant={"h2"}>{state.title}</Typography>
                            <Typography variant={"h2"} style={{fontWeight: 'bold'}}>{state.price}zł</Typography>
                            <Button variant={"contained"} color="primary"> Dodaj do koszyka</Button>
                        </Box>
                    </Box>
                </Box>
                <div style={{whiteSpace: "pre-line", textAlign: "left"}}>{state.description}</div>
            </Card>
        </Box>
    )
}

export default withRouter(ProductPage)