import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 25px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .description {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 1.5rem 0 2.4rem;
  }

  .description > p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: px;
  }
  > footer span {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  > footer span font {
    color: ${({ theme }) => theme.COLORS.WHITEFF};
  }
`;
