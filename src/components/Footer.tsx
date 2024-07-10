import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styed";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/cat-smile.svg" alt="" />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                            alias voluptatem laudantium magni.
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huapok.com</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>

                <p>&copy; 2024 Huapok. All rights reserved</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
