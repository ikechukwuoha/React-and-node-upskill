import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5) 
    ),
    url("https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=2048x2048&w=is&k=20&c=ejBpJP7COLRQ6BDNCeTDyNeY0HVX_R22fYG9kzRiQMA=") 
    center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 25px;
    font-weight: 300; 
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
`;


const Register = () => {
  return (
    <Container>

        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By Createing an Account, I Consent to the Processing of my Personal 
                    data in Accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
