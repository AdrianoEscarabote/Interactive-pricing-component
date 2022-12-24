import React, { Fragment, useState } from "react";
import Article from "./Article";
import Pricing from "./Pricing";

function Main() {
  const [value, setValue] = useState(0)

  const handleChangeInput = (e) => {
    // linear gradient input range

    let target = e.currentTarget

    if (e.currentTarget.type !== "range") {
      target = document.getElementById("range")
    }
    const min = target.min
    const max = target.max
    const val = target.value
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    changeContent(val)
  }

  const changeContent = (val) => {
    // changing texts
    const numberView = document.getElementById("numberView")
    const price = document.getElementById("number")

    const radio = document.getElementById("switch-shadow")
    console.log(radio.checked)

    setValue((value) => value = val)

    radio.checked ? document.getElementById("typePlan").innerText = " /yearly" : document.getElementById("typePlan").innerText = " /month"

    if (value >= 0 && value < 25) {
      radio.checked ? price.innerText = "$6.00" : price.innerText = "$8.00"
      numberView.innerText = "10K"
    } else if (value >= 25 && value < 50) {
      radio.checked ? price.innerText = "$9.00" : price.innerText = "$12.00"
      numberView.innerText = "50K"
    } else if (value >= 50 && value < 75) {
      numberView.innerText = "100K"
      radio.checked ? price.innerText = "$12.00" : price.innerText = "$16.00"
    } else if (value >= 75 && value < 95) {
      numberView.innerText = "500K"
      radio.checked ? price.innerText = "$18.00" : price.innerText = "$24.00"
    } else if (value >= 95){
      numberView.innerText = "1M"
      radio.checked ? price.innerText = "$27.00" : price.innerText = "$36.00"
    }
  }

  return (
    <Fragment>
      <Article />
      <Pricing handleChange={handleChangeInput} />
    </Fragment>
  )
}

export default Main;