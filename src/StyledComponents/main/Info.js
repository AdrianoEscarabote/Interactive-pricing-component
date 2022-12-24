import styled from "styled-components";

const Info = styled.div`
    padding: 2.5rem 2.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .views {
      p {
        font-weight: 800;
        font-size: 0.875rem;
        line-height: 1.1875rem;
        letter-spacing: 0.125rem;
        color: #858fad;
        text-align: center;
        text-transform: uppercase;
      }
    }

    .price {
      display: flex;
      align-items: center;  
      span {
        font-weight: 800;
        font-size: 2.5rem;
        line-height: 3.4375rem;
        letter-spacing: -0.0625rem;
        color: #293356;
        text-align: right;
      }
      p {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.375rem;
        color: #858fad;
        text-align: center;
        display: flex;
        align-items: center;
        gap: 0.5rem;

      }
    }
  }
`

export default Info;