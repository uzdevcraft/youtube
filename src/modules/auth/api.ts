import * as Types from './types';

import { http } from '@/services';

export const Login = ({ values }: { values: Types.IForm.Login }): any =>
  http.request.post(`/api/auth/login`, { username: values.phone, password: values.password });
