import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul {
        list-style: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: right;
    }

    img {
        width: 240px;
        height: 39px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;

        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`