import React from 'react'

const Button = styled.Button(
[],
{
  appearance: 'none',
  fontFamily: 'inherit',
  fontSize: '1em',
  fontWeight: 'bold',
  borderRadius: '3px',
  border: 'none'
},
space,
color
)

Button.propTypes = { 
  ...space.propTypes,
  ...color.propTypes,
}

Button.defaultProps = {
    m: 0,
    px : 2,
    py: 1,
    color: 'white',
    bg: '#333',
}

export default Button
