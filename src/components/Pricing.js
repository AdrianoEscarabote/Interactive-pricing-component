import React, { Fragment } from "react";
import iconCheck from "../../images/icon-check.svg";
import { Input, WrapperInput } from "../StyledComponents/main/inputRangeStyle";
import PricingStyle from "../StyledComponents/main/pricingStyle";
import Info from "../StyledComponents/main/Info";
import BillingStyle from "../StyledComponents/main/BillingStyle";
import DetailsStyle from "../StyledComponents/main/DetailsStyle";

export default function Pricing({ handleChange }) {
  return (
    <Fragment>
      <PricingStyle>
        <Info>
          <div className="views">
            <p><span id="numberView">100k</span> Pageviews</p>
          </div>
          <div className="price">
          <span id="number">$ 16.00</span><p id="typePlan"> /month</p>
          </div>
        </Info>

        <WrapperInput>
          <Input onChange={handleChange} min="0" max="100" type="range" name="range" id="range" />
        </WrapperInput>

        <BillingStyle>
          <p>Monthly Billing</p>
          <div className="switch__container">
            <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
            <label htmlFor="switch-shadow"></label>
          </div>
          <p>Yearly Billing <span className="discount">25% discount</span></p>
        </BillingStyle>

        <DetailsStyle>
          <ul>
            <li><img src={iconCheck} alt="" aria-hidden="true" />
              <p>Unlimited websites</p>
            </li>
            <li><img src={iconCheck} alt="" aria-hidden="true" />
              <p>100% data ownership</p>
            </li>
            <li><img src={iconCheck} alt="" aria-hidden="true" />
              <p>Email reports</p>
            </li>
          </ul>
          <button>Start my trial</button>
        </DetailsStyle>
      </PricingStyle>
    </Fragment>
  )
}