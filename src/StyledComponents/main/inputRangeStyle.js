import styled from "styled-components";
import iconSlider from "../../../images/icon-slider.svg";

const Input = styled.input`
  transition: 0s !Important;
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-color: #ecf0fb;
  background-image: linear-gradient(#a5f3eb, #a5f3eb);
  background-size: 50% 100%;
  background-repeat: no-repeat;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    cursor: pointer;
    background: url(${iconSlider}) no-repeat center #10d5c2;
    &:hover {
      background-color: #24AEA1 !Important;
      transition: 0.8s;
    }
  }

  &::-moz-range-thumb {
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    cursor: pointer;
    background: url(${iconSlider}) no-repeat center #10d5c2;
    &:hover {
      transition: 0.8s;
      background-color: #24AEA1 !Important;
    }
  }

  &::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`

const WrapperInput = styled.div`
  width: 100%;
  padding: 0rem 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export { WrapperInput, Input };