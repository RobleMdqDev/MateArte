import { Container } from "react-bootstrap";
import Hero from '../assets/img/hero3.jpg'

const Page404 = ()=>{

    const styles404 = {
        
        margin: "200px auto",
        padding: "5px",
        display: "block",
        maxWidth: "28rem",
        height: "fit-content",
        backgroundColor: "white",
        color: "black",
        fontSize: "400%",
        fontWeight: "bold",
        borderRadius: "20px", 
        zIndex: "5000"       
    };

    const imgStyle = {
        height: "80vh",
        width: "100%",
        backgroundSize: "cover",
        overFlow: "hidden",
        backgroundImage: "url("+Hero+")"
        
    }

    return(
        <Container style={imgStyle}>    
            {/* <img src={Hero} alt="Hero 404" style={{width:"100%"}}/>          */}
            <span style={styles404}>404 NOT FOUND!</span>
            
        </Container> 
    )
    

}

export default Page404
