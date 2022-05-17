import React from 'react'
import styled from 'styled-components/macro'

const StyledHeader = styled.div`
  background: #2c2c2d;
  color: white;
  min-height: 0vh;
  padding: 0.5rem 0;
  /*display: flex;
  justify-content: center;
  align-items: flex-start;*/
  font-size: 1.6rem;

  span {
    margin-left: 2rem;

    &:nth-of-type(2) {
      margin-left: 0.4rem;
    }
  }

  @media (max-width: 380px) {
    font-size: 1.2rem;

    span {
      margin-left: 0.5rem;
    }
  }
`

const StyledImage = styled.img`
  ${({ settings }) => {
    let toReturn = `
        vertical-align: middle;
      `

    if (settings.width) {
      toReturn += 'width:' + settings.width + ';'
    }
    if (settings.height) {
      toReturn += 'width:' + settings.height + ';'
    }
    return toReturn
  }}
  filter:  brightness(0) invert(1);
`

const StyledLogoHolder = styled.div`
  display: table-cell;
  vertical-align: middle;
`

const LogoHolder = ({ logo }) => {
  let toReturn = []

  logo.forEach((item) => {
    if (item.text) {
      toReturn.push(<span key={'theme_header_logo_text'}>{item.text}</span>)
    } else if (item.image) {
      toReturn.push(
        <span key={'theme_header_logo_imgae'}>
          {<StyledImage src={item.image} settings={item} />}
        </span>,
      )
    }
  })

  return <StyledLogoHolder>{toReturn}</StyledLogoHolder>
}

const Header = ({ layout }) => {
  return (
    <StyledHeader>
      {layout.logo && <LogoHolder logo={layout.logo} />}
    </StyledHeader>
  )
}

export default Header
