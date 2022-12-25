import styled from "styled-components";

const BillingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
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

  .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }
  
  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--shadow + label {
    padding: 2px;
    width: 46px;
    height: 25px;
    background-color: #dddddd;
    border-radius: 60px;
  }

  .switch--shadow + label:before,
  .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
  }
  .switch--shadow + label:before {
    right: 1px;
    background-color: #CFD8EF;
    border-radius: 60px;
    transition: all 0.4s;
  }
  .switch--shadow + label:after {
    height: 18px;
    width: 18px;
    top: 3.4px;
    left: 3px;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.4s;
  }
  .switch--shadow:checked + label:before {
    background-color: #7AEADF;
  }
  .switch--shadow:checked + label:after {
    transform: translateX(22px);
  }

  @media (max-width: 461px) {
    padding: 40px 26px 42px 26px;
    margin-top: 50px;
    flex-wrap: wrap;
  }
`

export default BillingStyle;