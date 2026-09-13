import styled from "styled-components";

export const ProgressSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
  padding: 0 20px;
`

export const ProgressSectionLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`
export const ProgressSectionRight = styled(ProgressSectionLeft)`
`