'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Youtube } from '@/components/Icon/list/custom';
import { IconSearch, IconBell } from '@tabler/icons-react';

import {
  AppShell,
  Group,
  ActionIcon,
  TextInput,
  Avatar,
  Menu,
  Drawer,
  Stack,
  Divider,
  Burger,
  Input
} from '@mantine/core';

import classes from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [mobileOpened, setMobileOpened] = useState(false);

  const handleSearch = () => {
    if (value.trim()) console.log('Search for:', value);
  };

  const mobileLinks = [
    { label: 'Subscriptions', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'History', href: '#' },
    { label: 'Your videos', href: '#' },
    { label: 'Watch later', href: '#' }
  ];

  return (
    <>
      <AppShell.Header className={classes.header} withBorder={false}>
        <div className={classes.container}>
          <div className={classes.logo} onClick={() => router.push('/')}>
            <Youtube />
          </div>

          {/* Center Section: Search Bar */}
          <Group gap={0} className={classes.centerSection}>
            <Input
              placeholder="Search"
              value={value}
              onChange={event => setValue(event.currentTarget.value)}
              rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              rightSectionPointerEvents="auto"
              radius={40}
              size="md"
              className={classes.searchInput}
              styles={{
                input: {
                  paddingRight: 0
                }
              }}
            />

            <ActionIcon size="lg" radius={40} className={classes.searchBtn} onClick={handleSearch}>
              <IconSearch size={20} />
            </ActionIcon>
          </Group>

          {/* Right Section: Icons & User Profile */}

          <Group gap="md" className={classes.rightSection}>
            <ActionIcon variant="subtle" size="lg" color="gray" className={classes.desktopOnly} title="Notifications">
              <IconBell size={24} />
            </ActionIcon>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <ActionIcon variant="light" color="blue" size="lg" radius="xl" className={classes.profileBtn}>
                  <Avatar size="sm" color="blue" radius="xl">
                    YC
                  </Avatar>
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown className={classes.menuBody}>
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Your channel
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Create a video
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Studio
                  </Link>
                </Menu.Item>
                <Divider />
                <Menu.Item>
                  <Link href="/settings" className={classes.menuLink}>
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Help
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Send feedback
                  </Link>
                </Menu.Item>
                <Divider />
                <Menu.Item>
                  <Link href="#" className={classes.menuLink}>
                    Sign out
                  </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      </AppShell.Header>

      {/* Mobile Navigation Drawer */}
      <Drawer opened={mobileOpened} onClose={() => setMobileOpened(false)} title="Menu" padding="md" size="xs">
        <Stack gap="md">
          {mobileLinks.map(link => (
            <Link key={link.label} href={link.href} className={classes.mobileLink}>
              {link.label}
            </Link>
          ))}
          <Divider />
          <Link href="#" className={classes.mobileLink}>
            Settings
          </Link>
          <Link href="#" className={classes.mobileLink}>
            Help
          </Link>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
