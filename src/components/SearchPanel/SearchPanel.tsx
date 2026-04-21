'use client';

import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { ActionIcon, Group, Input } from '@mantine/core';

import classes from './SearchPanel.module.scss';

const SearchPanel = () => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (value.trim()) console.log('Search for:', value);
  };

  return (
    <Group gap={0} className={classes.centerSection}>
      <Input
        placeholder="Search"
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
        rightSection={
          value !== '' ? <Input.ClearButton className={classes.clearButton} onClick={() => setValue('')} /> : undefined
        }
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
  );
};

export default SearchPanel;
