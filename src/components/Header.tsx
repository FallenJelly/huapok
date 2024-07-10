import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styed";
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/cat1.svg" alt="" />
                    <Button>Try It Free</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>มาเข้าร่วมกับแก๊ง "หัวโปกบางเสาธง" สิ!!</h1>

                        <p>
                            แก๊ง "หัวโปกบางเสาธง" ผู้สืบสานความดื้อ และหน้ามึนแห่ง
                            สมุทรปราการ ถึงทั้งแก๊งจะมีสี่คน แต่ก็ยิ่งใหญ่สุดในย่านบางเสาธง
                            เมืองเถื่อน ถ้าอยากอยู่รอดละก็ เข้าร่วมกับเราสิ!!
                        </p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src="./images/cat-smile.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;