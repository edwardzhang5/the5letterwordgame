import React from 'react'
import styled from 'styled-components'

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

const Navbar = (props) => {
  return (
    <Nav.Wrapper>
      <Nav.Logo>5-Letter Word Game</Nav.Logo>
      <Nav.Items>
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>Settings</Nav.Item>
        <Nav.Item>About</Nav.Item>
      </Nav.Items>
    </Nav.Wrapper>
  )
}
export default Navbar

const Nav = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  `,
  Logo: styled.h1`
    border: 2px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;
  `,
}
