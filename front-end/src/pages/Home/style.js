import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .addMovie {
    margin-top: 20px;
    padding: 0 75px;
    display: flex;
    justify-content: space-between;
    gap: 700px; white-space: nowrap;
    align-items: center;
  }
`;


export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 207px;
  height: 48px;

  svg {
    margin-right: 8px;
  }
`;