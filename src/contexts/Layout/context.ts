import { createContext } from 'react';

import * as Types from './types';

export const context = createContext<Types.IContext.ContextType | null>(null);

export default context;
