import React from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";

const TableComponent = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  // let handleChange=(e)=>{
  // console.log(e.target.innerText)
  // }

  return (


    <div className="max-w-full   px-2 bg-white  rounded-lg -mt-12">
      {/* <input
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border border-gray-300 rounded-md"
      /> */}
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {/* <th className="relative px-6 py-3 text-left text-xs font-medium bg-slate-600 text-white uppercase tracking-wider content-center">
              <HiArrowsUpDown size={22} className='absolute right-1  text-white'/> 
                # 
              </th>  */}
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 relative py-3 text-center text-xs font-medium bg-black text-white uppercase tracking-wider border-r-2 border-r-white"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <HiArrowsUpDown size={22} className='absolute right-1 top-2 text-white' />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pageIndex * pageSize + i + 1}
                </td> */}
                {row.cells.map((cell,i) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  // onClick={handleChange}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {data.length === 0 && <div className='h-20 w-full bg-slate-200 py-6'>
        No information
      </div>}
      <div className="py-3 flex items-center justify-between text-slate-400">
        <div>
          Records from 0 to {data.length}{`( ${data.length} Records)`}
        </div>

        <div className="flex items-center">
          <div>
            <div className="flex-1 flex justify-between">
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="px-4 py-2 mx-2 bg-slate-200 text-gray-700 rounded-md"
              >
                <FaAngleLeft size={22} />
              </button>
              <span className='p-4 bg-slate-200'>
                {pageIndex + 1}
              </span>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="ml-3 px-4 py-2 bg-slate-200 text-gray-700 rounded-md"
              >

                <FaAngleRight size={22} />
              </button>
            </div>
          </div>
          {/* <span className="mr-2">
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span> */}
          {/* <span>
            | Go to page: {' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="border p-1 rounded-md w-12"
              style={{ width: '50px' }}
            />
          </span> */}
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
            className="ml-3 border p-2 rounded-md"
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
