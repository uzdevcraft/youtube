'use client';

import { Toaster } from 'sonner';
import { FC, ReactNode, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '../../theme';

import { showApiError } from '@/lib/utils';

const onQueryError = (error: any, query: any) => {
  if (query.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const onMutationError = (error: any, _variables: any, _context: any, mutation: any) => {
  if (mutation.options.meta?.customErrorHandling) return;

  showApiError(error);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  },
  mutationCache: new MutationCache({
    onError: onMutationError
  }),
  queryCache: new QueryCache({
    onError: onQueryError
  })
});

interface LayoutProps {
  children: ReactNode;
}

const Providers: FC<LayoutProps> = ({ children }) => {
  const [client] = useState(queryClient);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
      <QueryClientProvider client={client}>
        {children}
        <Toaster
          position="top-center"
          theme="dark"
          richColors
          closeButton
          // toastOptions={{
          //   style: {
          //     background: "var(--bg-tertiary)",
          //     border: "1px solid var(--border-color)",
          //     color: "var(--text-primary)",
          //   },
          // }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default Providers;
