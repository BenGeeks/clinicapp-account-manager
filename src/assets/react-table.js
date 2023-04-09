import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

import { RiEdit2Line, RiDeleteBin4Line } from 'react-icons/ri';
import styles from './react-table.module.css';

const ReactTable = ({ COLUMNS, DATA, title, enableEdit, enableDelete, enableAddNew, onEdit, onDelete, onAddNew }) => {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);
  const [enableFilter, setEnableFilter] = useState(false);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useFilters, useSortBy);

  const enableFilterHandler = () => {
    setEnableFilter((prevState) => !prevState);
  };

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>{title}</h2>
        <div className={styles.buttons_container}>
          {enableAddNew && (
            <button className={styles.button1} onClick={onAddNew}>
              Add New
            </button>
          )}
          <button className={styles.button1} onClick={enableFilterHandler}>
            {enableFilter ? 'Disable Filter' : 'Enable Filter'}
          </button>
        </div>
      </div>

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
              <th className={styles.table_head}>
                <div className={styles.table_head_text}>Actions</div>

                {enableFilter && <div className={styles.blank_input}></div>}
              </th>
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
                    </td>
                  );
                })}
                <td className={styles.cell}>
                  <div className={styles.icon_container}>
                    {enableEdit && (
                      <div title="edit" className={styles.icon} onClick={() => onEdit(row.original._id)}>
                        <RiEdit2Line />
                      </div>
                    )}
                    {enableDelete && (
                      <div title="delete" className={styles.icon} onClick={() => onDelete(row.original._id)}>
                        <RiDeleteBin4Line />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable;
