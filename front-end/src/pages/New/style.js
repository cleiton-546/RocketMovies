import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }    

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }    
`;

export const Form = styled.form`
  padding: 40px 123px 70px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.RED};

    margin-bottom: 36px;

    button {
        color: ${({ theme }) => theme.COLORS.RED};
        font-size: 20px;
    }
    
  }

  h1 {
    font-size: 36px;
  }
 

  > .inputs {
    display: flex;
    gap: 40px;
    margin-bottom: 35px;
    margin-top: 40px;
    
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 24px;
    border-radius: 8px;
  }

  .edit {
    display: flex;
    gap: 40px;
  }

  .delete {
    color: ${({ theme }) => theme.COLORS.RED};
    background: ${({ theme }) => theme.COLORS.BLACK};
  }
`;

