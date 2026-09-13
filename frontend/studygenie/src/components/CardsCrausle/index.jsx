import { Cards, 
    CardCrauselContainer,
    CardIconWrapper,
    CardLabel,
    CardValue,
} from "./index.styled";

import { FaBook, FaInfoCircle, FaUserTimes } from "react-icons/fa";

const lightColors = [
    "rgba(66, 99, 61, 0.8)",
    "rgba(66, 99, 61, 0.6)",
    "rgba(66, 99, 61, 0.4)",
    "rgba(66, 99, 61, 0.2)",

];

const darkColors = [
    "rgba(141, 96, 60, 0.32)",
    "rgba(186, 169, 41, 0.9)",
    "rgba(66, 99, 61, 0.8)",
    "rgba(66, 99, 61, 0.7)",
];

const cardsItemsData= [
    { id: 1, title: "Total Topics", content: "10", icon: <FaBook stroke={darkColors[0]} />, bgColor: darkColors[0],  },
    { id: 2, title: "Overall Progress", content: "75%", icon: <FaInfoCircle stroke={darkColors[0]} />, bgColor: darkColors[0] },
    { id: 3, title: "Study Streak", content: "5 days", icon: "🔥", bgColor: darkColors[0] },
    { id: 4, title: "Study Time", content: "24.5 hours", icon: <FaUserTimes stroke={darkColors[2]} />, bgColor: darkColors[0] },
];

function CardCrausel({
    cardsItems = cardsItemsData,
}) {
    return (  
        <CardCrauselContainer>
            {cardsItems.map((card) => (
                <Cards key={card.id}>
                    <CardIconWrapper bgColor={card.bgColor}>
                        {card.icon && card.icon}
                    </CardIconWrapper>
                    <CardLabel>{card.title}</CardLabel>
                    <CardValue>{card.content}</CardValue>
                </Cards>
            ))}
        </CardCrauselContainer>
    );
}

export default CardCrausel;