import { Logo } from '@/components/Logo';
import { SearchPanel } from '@/components/SearchPanel';
import { ActionIcon, Burger, Group } from '@mantine/core';

import { IconBell } from '@tabler/icons-react';
import { useContext } from '@/contexts/Layout';

import classes from './Header.module.scss';

const Header = () => {
  const { mobileOpen, toggleDesktop, toggleMobile } = useContext();

  return (
    <>
      <Group h="100%" px="md">
        <Burger opened={mobileOpen} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        <Burger opened={false} onClick={toggleDesktop} visibleFrom="sm" size="sm" />

        <Logo />
      </Group>

      <SearchPanel />

      <Group gap="md" className={classes.rightSection}>
        <ActionIcon variant="subtle" size="lg" color="gray">
          <IconBell size={24} />
        </ActionIcon>
      </Group>
    </>
  );
};

export default Header;

// <Menu shadow="md" width={200}>
//   <Menu.Target>
//     <ActionIcon variant="light" color="blue" size="lg" radius="xl" className={classes.profileBtn}>
//       <Avatar size="sm" color="blue" radius="xl">
//         YC
//       </Avatar>
//     </ActionIcon>
//   </Menu.Target>

//   <Menu.Dropdown className={classes.menuBody}>
//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Your channel
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Create a video
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Studio
//       </Link>
//     </Menu.Item>

//     {/* Divider */}
//     <Divider />

//     <Menu.Item>
//       <Link href="/settings" className={classes.menuLink}>
//         Settings
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Help
//       </Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Send feedback
//       </Link>
//     </Menu.Item>

//     {/* Divider */}
//     <Divider />

//     <Menu.Item>
//       <Link href="#" className={classes.menuLink}>
//         Sign out
//       </Link>
//     </Menu.Item>
//   </Menu.Dropdown>
// </Menu>
