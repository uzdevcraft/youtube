'use client';

import React from 'react';
import cx from 'clsx';
import { get } from 'radash';

import * as List from './list';

import classes from './Icon.module.scss';

type ListTypes = keyof typeof List;

type NameTypes =
  | keyof typeof List.outline
  | keyof typeof List.flag
  | keyof typeof List.social
  | keyof typeof List.custom;

export interface IProps {
  name: NameTypes | string;
  type?: ListTypes;
  size?: number;
  className?: string;
  onClick?: (e?: any) => void;
}

const Icon: React.FC<IProps> = ({ name, type = 'outline', size = 24, className, onClick }) => {
  const Component: any = get(List, `[${type}][${name}]`);

  if (!Component) {
    return null;
  }

  return (
    <div
      className={cx(classes.wrapper, className)}
      onClick={onClick}
      style={size ? ({ '--size': `${size}px` } as React.CSSProperties) : {}}
    >
      <Component />
    </div>
  );
};

export default Icon;
