import React, { Fragment } from "react";
import { Title, ArticleStyled, P } from "../StyledComponents/main/ArticleStyle";

export default function Article() {

  return (
    <ArticleStyled>
      <Title>
        Simple, traffic-based pricing
      </Title>
      <P>Sign-up for our 30-day trial. No credit card required.</P>
    </ArticleStyled>
  )
}