import styled from "styled-components";

export const MainContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  top: 60px;
  flex: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "250px" : "0")}; /* Adjust this value based on the width of your sidebar */
  transition: margin-left 0.3s ease;
`