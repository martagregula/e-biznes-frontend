import "./styles/MainPage.css"
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function MainPage() {
    return (
        <div className="home">
            <div>
                <div className='text'>E-commerce shop project</div>
                <p className='text'>Aby rozpocząć zakupy wybierz jedną z poniższych opcji:</p>
            </div>
                <div className="button-container">
                    <Button component={Link} to="/cart" variant="contained" color="primary">Koszyk</Button>
                    <Button component={Link} to="/productList" variant="contained" color="primary">Produkty</Button>
                    <Button component={Link} to="/login" variant="contained" color="primary">Logowanie</Button>
                </div>
        </div>
    )
}