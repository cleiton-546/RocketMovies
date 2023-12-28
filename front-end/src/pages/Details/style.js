import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh ;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content";

        > main {
            grid-area: content;
            overflow-y: scroll;
            padding: 40px 130px 123px 120px; 
        }    
`;



export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .title {
    display: flex;
    gap: 25px;
  }

  .title h1 {
    font-size: 36px;
  }

  .userTimer {
    display: flex;
    gap: 20px;
    margin-top: 24px;
  }

  .userTimer img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    border-radius: 35px;
    border: 1px solid #3e3b47;
  }
  .userTimer svg {
    color: ${({ theme }) => theme.COLORS.RED};
    margin-right: 5px;
  }
`;


