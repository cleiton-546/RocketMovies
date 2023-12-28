import styled, { ThemeConsumer } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.RED};
    
  }

  > input {
    height: 56px;
    padding: 12px;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
