'use client';

import { Icon } from '@/components/Icon';
import { themeOptions } from '@/containers/Theme';
import { Group, Select, SelectProps, useMantineColorScheme } from '@mantine/core';

import classes from './ThemeSelect.module.scss';

type IProps = {
  withIcon?: boolean;
  showAuto?: boolean;
};

export function ThemeSelect({ withIcon = false, showAuto = false }: IProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const options = showAuto ? themeOptions : themeOptions.filter(option => option.value !== 'auto');
  const displayOptions = options.map(option => ({ value: option.value, label: option.label }));

  const handleChange = (value: string | null) => {
    if (value) setColorScheme(value as 'light' | 'dark' | 'auto');
  };

  return (
    <Select
      data={displayOptions}
      onChange={handleChange}
      value={colorScheme}
      renderOption={withIcon ? renderThemeOptionWithIcon : renderThemeOptionWithoutIcon}
      classNames={{
        root: classes.themeSelect,
        input: classes.selectInput,
        label: classes.selectLabel
      }}
    />
  );
}

const renderThemeOptionWithIcon: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group gap="sm">
    <Icon name={themeOptions.find(item => item.value === option.value)?.icon ?? 'Sun'} className={classes.optionIcon} />
    {option.label}
    {checked && <Icon name="Check" size={16} className={classes.optionCheck} />}
  </Group>
);

const renderThemeOptionWithoutIcon: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group gap="sm">
    {option.label}
    {checked && <Icon name="Check" size={16} className={classes.optionCheck} />}
  </Group>
);
