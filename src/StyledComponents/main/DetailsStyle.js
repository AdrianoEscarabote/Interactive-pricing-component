import styled from "styled-components";

const DetailsStyle = styled.div`
  border-top: 0.0625rem solid #ECF0FB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 2.0625rem 2.875rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      gap: 1rem;

      p {
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 1rem;
        color: #858fad; 
      }
    }
  }

  button {
    font-weight: 800;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #bdccff;
    border-radius: 1.2813rem;
    background-color: #293356;
    max-width: 10.625rem;
    height: 2.9375rem;
    width: 100%;
    border: 0.0625rem solid transparent;
    &:hover {
      color: #ffffff !Important;
    }
  }
`

export default DetailsStyle;