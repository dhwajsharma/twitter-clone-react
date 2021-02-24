import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
export const Toggler = ({ theme, themeToggler }) => {
    return (
        <Button onClick={themeToggler} >
            Switch Theme
        </Button>
    );
};
Toggler.propTypes = {
    theme: string.isRequired,
    themeToggler: func.isRequired,
}
// export default Toggler;
