import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

import styles from './react-table.module.css';

const ReactTable = ({ COLUMNS, DATA, enableFilter }) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useFilters, useSortBy);

  return (
    <table {...getTableProps()} className={styles.main_table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className={styles.table_head_row}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className={styles.table_head}>
                <div {...column.getHeaderProps(column.getSortByToggleProps())} className={styles.table_head_text}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </div>
                {enableFilter && <div>{column.canFilter && column.render('Filter')}</div>}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles.table_row}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles.cell}>
                    {cell.render('Cell')}
                    {console.log(cell)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReactTable;
