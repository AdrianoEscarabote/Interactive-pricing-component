import React, { Fragment } from "react";
import Article from "./Article";
import Pricing from "./Pricing";

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <Article />
        <Pricing />
      </Fragment>
    )
  }
}

export default Main;

/* return (
    <Fragment>
      <div class="pricing-component">
        <div class="infos">
          <div class="views">
            <p><span id="numberView">100k</span> Pageviews</p>
          </div>
          <div class="price">
            <p><span id="number">$ 16.00</span> /month</p>
          </div>
        </div>

        <div class="input">
          <input type="range" name="range" id="range">
        </div>

        <div class="billing">
          <p>Monthly Billing</p>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault"></label>
          </div>
          <p>Yearly Billing <span class="discount">25% discount</span></p>
        </div>

        <div class="details">
          <ul>
            <li><img src={iconCheck} alt="" aria-hidden="true">
              <p>Unlimited websites</p>
            </li>
            <li><img src={iconCheck} alt="" aria-hidden="true">
              <p>100% data ownership</p>
            </li>
            <li><img src={iconCheck} alt="" aria-hidden="true">
              <p>Email reports</p>
            </li>
          </ul>
          <button>Start my trial</button>
        </div>
      </div>
    </Fragment>
  )*/
