import React from 'react';
import { Input } from 'react-toolbox/lib/input';
import style from './style.scss';

const CustomInput = (props) => (
  <Input {...props} theme={style} />
);

export default CustomInput;
