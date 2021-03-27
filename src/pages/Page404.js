import { Container } from "react-bootstrap";
import Hero from '../assets/img/hero3.jpg'

const Page404 = ()=>{

    const styles404 = {
        position: "relative",
        top: "-50%",
        margin: "auto",
        padding: "5px",
        display: "block",
        width: "28rem",
        height: "20rem",
        backgroundColor: "white",
        color: "black",
        fontSize: "6rem",
        fontWeight: "bold",
        borderRadius: "20px", 
        zIndex: "5000"       
    };

    return(
        <Container > 
            <img src={Hero} alt="Hero 404"/>
            <span style={styles404}>404 NOT FOUND!</span>
        </Container> 
    )
    

}

export default Page404
