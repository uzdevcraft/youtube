import { ReactNode } from 'react';
import { type AppShellProps, AppShell as AppShellWrapper } from '@mantine/core';

interface IProps extends AppShellProps {
  children: ReactNode;
}

function AppShell({ children, ...props }: IProps) {
  return <AppShellWrapper {...props}>{children}</AppShellWrapper>;
}

export default AppShell;
