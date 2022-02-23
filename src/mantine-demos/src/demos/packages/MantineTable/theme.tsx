import React from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';

import { nodes } from './data';

const code = `
import React from 'react';
import { MantineTable } from '@mantine/table';
import { useTheme } from '@table-library/react-table-library/theme';

import { nodes } from './data';

function Demo() {
  const data = { nodes };

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return <MantineTable columns={COLUMNS} data={data} />;
}
`;

export function Demo() {
  const data = { nodes };

  const theme = useTheme({
    HeaderRow: `
      background-color: #eaf5fd;
    `,
    Row: `
      &:nth-child(odd) {
        background-color: #d2e9fb;
      }

      &:nth-child(even) {
        background-color: #eaf5fd;
      }
    `,
  });

  const COLUMNS = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes?.length },
  ];

  return <CompactTable columns={COLUMNS} data={data} theme={theme} />;
}

export const theme: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
