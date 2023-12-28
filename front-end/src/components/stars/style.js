import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;

  line-height: 0;
  list-style: none;

  .bg > svg {
    fill: ${({ theme }) => theme.COLORS.RED};
  }

  > li > svg {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`;
