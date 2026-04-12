"use client";

import { Toaster } from "sonner";
import { MantineProvider, createTheme } from "@mantine/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        // Don't retry on 403/400
        const status = (error as { response?: { status?: number } })?.response
          ?.status;
        if (status === 403 || status === 400) return false;
        return failureCount < 2;
      },
    },
  },
});

const mantineTheme = createTheme({
  primaryColor: "dark",
  fontFamily: "Roboto, Arial, sans-serif",
  colors: {
    dark: [
      "#f1f1f1",
      "#aaaaaa",
      "#717171",
      "#3f3f3f",
      "#2a2a2a",
      "#212121",
      "#1a1a1a",
      "#0f0f0f",
      "#0a0a0a",
      "#050505",
    ],
  },
});

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
        {children}
        <Toaster
          position="bottom-left"
          theme="dark"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
