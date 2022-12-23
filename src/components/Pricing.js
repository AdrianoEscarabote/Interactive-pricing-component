import React, { Fragment } from "react";
import iconCheck from "../../images/icon-check.svg";
import {Input, WrapperInput} from "../StyledComponents/main/inputRangeStyle";
import PricingStyle from "../StyledComponents/main/pricingStyle";
import button_trial from "../StyledComponents/main/button_trial";
import Info from "../StyledComponents/main/Info";
import BillingStyle from "../StyledComponents/main/BillingStyle";
import DetailsStyle from "../StyledComponents/main/DetailsStyle";

export default function Pricing() {
  return (
    <Fragment>
      <PricingStyle>
        <Info>
          <div class="views">
            <p><span id="numberView">100k</span> Pageviews</p>
          </div>
          <div class="price">
            <p><span id="number">$ 16.00</span> /month</p>
          </div>
        </Info>

        <WrapperInput>
          <Input type="range" name="range" id="range" />
        </WrapperInput>

        <BillingStyle>
          <p>Monthly Billing</p>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <p>Yearly Billing <span class="discount">25% discount</span></p>
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