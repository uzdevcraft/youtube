import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { first, get } from 'radash';

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getQueryClient = cache(() => new QueryClient());

export function getApiError(error: any) {
  const data = get(error, 'response.data') || {};

  return {
    code: get(data, 'code') || '',
    message: get(data, 'message') || '',
    validations: Object.values(get(data, 'validations') || {}).map(item => first(item)) as string[]
  };
}

export function showApiError(error: any) {
  const data = getApiError(error);

  if (data.validations.length > 0) {
    data.validations.forEach((item: string) => {
      console.log('toast validation message: ', item);
    });
    return;
  }

  data.message && console.log('toast message: ', data.message);
}

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -20 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8]
      }
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const formatPhoneNumber = (number: string) => {
  if (!number) {
    return '';
  }

  let str = number.toString().replace(/\D/g, '');
  if (str.length === 11 && str.startsWith('998')) {
    str = `+${str}`;
  } else if (str.length === 12 && str.startsWith('998')) {
    str = `+${str}`;
  } else if (str.length === 13 && str.startsWith('+998')) {
  } else {
    return '';
  }

  return `${str.slice(0, 4)} ${str.slice(4, 6)} ${str.slice(6, 9)} ${str.slice(9, 11)} ${str.slice(11, 13)}`;
};
