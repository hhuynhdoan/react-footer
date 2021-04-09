import React from 'react';
import Footer from '../components/footer';
import { Icon } from '../components/icons/styles/icon';


export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About U</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Client</Footer.Link>
                    <Footer.Link href="#">Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Service</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">US</Footer.Link>
                    <Footer.Link href="#">UK</Footer.Link>
                    <Footer.Link href="#">Aus</Footer.Link>
                    <Footer.Link href="#">VN</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">< Icon className="fab fa-facebook-f"></Icon>Facebook</Footer.Link>
                    <Footer.Link href="#">< Icon className="fab fa-instagram"></Icon>Instagram</Footer.Link>
                    <Footer.Link href="#">< Icon className="fab fa-youtube"></Icon>Youtube</Footer.Link>
                    <Footer.Link href="#">< Icon className="fab fa-twitter"></Icon>Twitter</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}