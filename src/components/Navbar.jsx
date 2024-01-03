import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.8px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;   
`;

const Left = styled.div`
    flex: 1;
    display: flex;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
`



const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>GLIZ.</Logo></Center>
                <Right>

                    <MenuItem>SIGN UP</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>

                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
      
    </div>
  )
}

export default Navbar