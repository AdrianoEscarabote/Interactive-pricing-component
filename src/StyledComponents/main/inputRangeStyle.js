import styled from "styled-components";
import iconSlider from "../../../images/icon-slider.svg";

const Input = styled.input`
  all: unset;
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  width: 100%;
  background-color: #ECF0FB;
  input[type=range]::-webkit-slider-thumb,
  input[type=range]::-moz-range-thumb,
  input[type=range]::-ms-range-thumb {
    width: 6.25rem;
    height: 4.375rem;
    all: unset;
    -webkit-appearance: none;
    appearance: none;
    border: 0.0625rem solid transparent;
    background-color: #10d5c2;
    background-image: url('${iconSlider}');
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