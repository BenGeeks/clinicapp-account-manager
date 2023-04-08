import React, { useEffect, useState } from 'react';
import moment from 'moment';

import styles from './table.module.css';

const Table = ({ data, header }) => {
  const [sortDirection, setSortDirection] = useState('off');
  const [sortedData, setSortedData] = useState(data);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleHeaderSort = (name) => {
    setFilter(name);
    sortDirection === 'off' && setSortDirection('ascending');
    sortDirection === 'ascending' && setSortDirection('descending');
    sortDirection === 'descending' && setSortDirection('off');

    if (sortDirection === 'off') {
      setSortedData(data);
    }

    if (sortDirection === 'ascending') {
      let sorted = data.slice().sort((a, b) => {
        if (a[name] < b[name]) return 1;
        if (a[name] > b[name]) return -1;
        return 0;
      });
      setSortedData(sorted);
    }

    if (sortDirection === 'descending') {
      let sorted = data.slice().sort((a, b) => {
        if (a[name] > b[name]) return 1;
        if (a[name] < b[name]) return -1;
        return 0;
      });
      setSortedData(sorted);
    }
  };

  return (
    <table className={styles.main_table}>
      <thead>
        <tr className={styles.table_head_row}>
          {header &&
            header.map((header) => (
              <th key={header.name} className={styles.table_head} onClick={() => handleHeaderSort(header.name)}>
                <span>{header.label}</span> {header.name === filter && sortDirection === 'descending' && <span>🔼</span>} {header.name === filter && sortDirection === 'ascending' && <span>🔽</span>}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {sortedData &&
          sortedData.map((row) => (
            <tr className={styles.table_row} key={row._id}>
              {header &&
                header.map((cell) => (
                  <td className={styles.cell} key={cell.name}>
                    {cell.type === 'date' ? (row[cell.name] ? moment(row[cell.name]).format(cell.format) : '') : row[cell.name]}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
