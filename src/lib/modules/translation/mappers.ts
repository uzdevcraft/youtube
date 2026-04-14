import { get } from 'radash';

import * as Types from './types';

export const Translation = (item: any, propName: string, isObject?: boolean): Types.Translation => {
  if (isObject) {
    return {
      ru: get(item, `${propName}.ru`) || '',
      en: get(item, `${propName}.en`) || '',
      uz: get(item, `${propName}.uz`) || '',
    };
  }

  return {
    ru: get(item, `${propName}.ru`) || '',
    en: get(item, `${propName}.en`) || '',
    uz: get(item, `${propName}.uz`) || '',
  };
};
