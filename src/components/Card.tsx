import React from "react";
import { StyledCard } from "./styles/Card.styled";

type CardProps = {
    item :{
        id?: number;
        title: string;
        body: string;
        image: string;
    }
}

const Card: React.FC<CardProps> = ( { item: { id, title, body, image }}) => {
    return (
        <StyledCard layout={id ? id % 2 === 0 : undefined}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt="" />
            </div>
        </StyledCard>
    )
}

export default Card;