import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  color: ${({ theme }) => theme.COLORS.RED};
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  background: none;
  border: none;
  display: flex;
`;
