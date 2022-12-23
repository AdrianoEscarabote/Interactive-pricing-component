import styled from "styled-components";

const BillingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 40px 46px 42px 46px;
  gap: 10px;

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #858fad;
    margin: 0;

    .discount {
      font-weight: 800;
      font-size: 10px;
      line-height: 14px;
      color: #ff8c66;
      background: #feece7;
      border-radius: 9.5px;
      padding: 4.2px 9px;
      margin-left: 6px;
    }
  }

  .form-check {
    padding: 0;

    .form-check-input {
      background-color: #CFD8EF;
      width: 43px;
      height: 22px;
      border: 1px solid transparent;
      box-shadow: unset;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
      margin: 0;

      &:checked {
        background-color: #10d5c2;
      }
    }
  }
`

export default BillingStyle;