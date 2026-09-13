import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(({ isOpen }) => (isOpen ? "250px" : "0"))};
  transition: width 0.3s ease;
  height: calc(100vh - 60px); /* Adjust this value based on the height of your navbar */
  overflow-x: hidden;
  background-color: #f8f9fa;
  position: fixed;
  top: 60px;
  left: 0;
  padding: 20px 0;
`
export const SidebarList = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    border-radius: 16px;
    cursor: pointer;
    background-color: #ffffff;
    border-bottom: 1px solid #e9ecef;

    &:hover {
      background-color: #f5f5f5;
      box-shadow: 0 2px 4px rgba(215, 31, 120, 0.53);
    }
  }
`
export const SidebarFooter = styled(SidebarList)`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #e9efe9;
`
