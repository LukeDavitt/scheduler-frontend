import React from 'react'
import { Button } from 'react-toolbox/lib/button'
import style from './style.scss'

const CustomButton = (props) => (
  <Button {...props} theme={style} />
);

export default CustomButton;
