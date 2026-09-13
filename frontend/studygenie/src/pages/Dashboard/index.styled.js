import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  grid-template-columns: auto auto;
`

export const DashboardMainContent = styled.div`
   width: 70%;
`

export const DashboardSidebar = styled.div`
   width: ${({ isOpen = true}) => (isOpen ? "250px" : "10px")}
`
export const GreetingConatiner = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;

   h5{
      padding: 0 10px;
      margin: 0;
      font-size: 25px;
      color: #333333;
      font-weight: 700;
   }

   span{
      font-weight: 400;
      color: #7D7D7D;
      padding: 0 10px;
   }
`