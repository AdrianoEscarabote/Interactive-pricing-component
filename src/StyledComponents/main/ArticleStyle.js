import styled from "styled-components"
import pattern_circles from "../../../images/pattern-circles.svg"

const ArticleStyled = styled.article`
  width: 100%;
  max-width: 24.6875rem;
  height: 9.0625rem;
  background: url('${pattern_circles}') center no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 1.75rem;
  line-height: 2.375rem;
  text-align: center;
  color: #293356;
`

const P = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #858fad;
`

export {Title, ArticleStyled, P} 