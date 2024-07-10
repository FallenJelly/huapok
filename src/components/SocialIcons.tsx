import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://x.com">
                    <FaXTwitter />
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}

export default SocialIcons;