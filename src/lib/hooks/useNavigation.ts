'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface QueryParams {
  [key: string]: string | string[] | number | number[] | null | undefined;
}

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const query = useMemo(() => {
    const obj: { [key: string]: string | string[] } = Object.fromEntries(searchParams);

    Object.entries(obj).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        delete obj[key];
      }

      if (typeof value === 'string' && value.includes(',')) {
        obj[key] = value.split(',');
      }
    });

    return obj;
  }, [searchParams]);

  const createQueryString = useCallback(
    (queryParams: QueryParams) => {
      const params = new URLSearchParams(searchParams);

      const paramsObject = Object.fromEntries(params);

      const newQueryObject = Object.assign(paramsObject, queryParams);

      Object.entries(newQueryObject).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      return params.toString();
    },
    [searchParams]
  );

  const pushQuery = (query: QueryParams) => {
    router.push(`${pathname}?${createQueryString(query)}`);
  };

  const navigate = (path: string, options?: { query: QueryParams }) => {
    const { query } = options || { query: {} };

    router.push(`${path}?${createQueryString(query)}`);
  };

  return { ...router, pathname, searchParams, query, pushQuery, navigate };
};

export default useNavigation;
