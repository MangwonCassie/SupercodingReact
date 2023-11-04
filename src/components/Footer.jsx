
import { FacebookOutlined, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
   display: flex;
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
    color: black;
    background-color: #${props => props.color};
    display: flex;
    align-items:center;
    justify-content: center;
 
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
`



const Right = styled.div`
    flex: 1;
    margin-top: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-item: center;
`


const Payment = styled.img`
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Cassie.</Logo>
                <Desc> There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlined c />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE" >
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room /> South Korea, Seoul
                </ContactItem>
                <ContactItem>
                    <Phone /> +82 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline /> dudnfsla1@naver.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;