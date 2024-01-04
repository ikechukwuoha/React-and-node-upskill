import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column" })}
`


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`


const Logo = styled.h1`

`;


const Desc = styled.p`
    margin: 20px 0px;
`;


const SocialContainer = styled.div`
    display: flex;

`;


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;



const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fdf6f6" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 60%;
    cursor: pointer;
    padding-left: 10px;
`;




const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>GLIZ.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat vel dignissimos exercitationem 
                ab ullam unde ducimus placeat sequi incidunt eos, quam animi enim deserunt vitae qui debitis odio at.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio! Sapiente est assumenda blanditiis sit.
                Veritatis, facilis soluta nostrum aliquid quos a! Veritatis cupiditate nostrum quas dolor incidunt officia quos.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
                <SocialIcon color="25D366">
                    <WhatsApp />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Shistlist</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}} />
                No. 600 P Cadestral Zone, Bwari Abuja
            </ContactItem>
            <ContactItem> <Phone style={{marginRight:"10px"}} />
                +234 81 698 745 88
            </ContactItem>
            <ContactItem> <MailOutline style={{marginRight:"10px"}} />
                Contact @Gliz.Beauty
            </ContactItem>

            <Payment src="https://www.shift4shop.com/images/credit-card-logos/cc-sm-5_b.png"  />
        </Right>
      
    </Container>
  )
}

export default Footer
