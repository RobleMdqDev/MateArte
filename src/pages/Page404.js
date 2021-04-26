import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Hero from "../assets/img/hero3.jpg";
import Loader from "../components/loader/Loader";

const Page404 = () => {
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
    zIndex: "5000",
  };

  const imgStyle = {
    height: "80vh",
    width: "100%",
    backgroundSize: "cover",
    overFlow: "hidden",
    backgroundImage: "url(" + Hero + ")",
  };

  const [auxHtml, setAuxHtml] = useState(<Loader />);

  useEffect(() => {
    setTimeout(() => {
        setAuxHtml(
          <Container style={imgStyle}>
            <span style={styles404}>404 NOT FOUND!</span>
          </Container>
        );
      }, 2000);
  }, [])  

  return auxHtml;
};

export default Page404;
