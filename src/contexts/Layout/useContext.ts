import React from 'react';

import context from './context';
import * as Types from './types';

const useContext = (): Types.IContext.ContextType => {
  const LayoutContext = React.useContext(context);

  if (!LayoutContext) {
    throw new Error('useContext must be used within a content-lang Provider');
  }
  return LayoutContext;
};

export default useContext;
