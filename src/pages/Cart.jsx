import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"



const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
`;


const Info = styled.div`
    flex: 3;
`;


const Product = styled.div``;
const ProductDetail = styled.div``;
const Image = styled.image``;
const Details = styled.div``;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;

const PriceDetail = styled.div``;



const Summary = styled.div`
    flex: 1;
`;




const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
          <Title>YOUR CART</Title>
          <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Cart(2)</TopText>
                <TopText>Your Whishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECK OUT NOW</TopButton>
          </Top>
          <Buttom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://media.istockphoto.com/id/1361697255/photo/african-american-woman-looking-away-and-smiling.jpg?s=1024x1024&w=is&k=20&c=Bdjyli_1pBbfLiZI73Zh-DlNnlzLPySnLlne2gcINTY=" />
                        <Details>
                          <ProductName><b>Product:</b>BIG SHOE FOR MEN</ProductName>
                          <ProductID><b>ID:</b>0595859586</ProductID>
                          <ProductColor />
                          <ProductSize><b>Size:</b>35</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        price
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>Summary</Summary>
          </Buttom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
