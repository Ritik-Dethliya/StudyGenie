import styled from "styled-components"

export const CardCrauselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(68, 68, 68, 0.1);
    border-radius: 5px;
    min-width: 200px;
`

export const CardIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${({ bgColor }) => bgColor || "#cccccc91"};
`

export const CardLabel = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: #7D7D7D;
    font-weight: 400;
`

export const CardValue = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: #333333;
    font-weight: 700;
`

export const CardSummaryNote = styled.p`
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #3b9935;
    font-weight: 400;
`