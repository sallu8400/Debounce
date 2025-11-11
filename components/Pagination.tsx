
// import React from 'react';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];
//   const maxPagesToShow = 5;

//   let startPage: number, endPage: number;
//   if (totalPages <= maxPagesToShow) {
//     startPage = 1;
//     endPage = totalPages;
//   } else {
//     const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
//     const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;
//     if (currentPage <= maxPagesBeforeCurrent) {
//       startPage = 1;
//       endPage = maxPagesToShow;
//     } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
//       startPage = totalPages - maxPagesToShow + 1;
//       endPage = totalPages;
//     } else {
//       startPage = currentPage - maxPagesBeforeCurrent;
//       endPage = currentPage + maxPagesAfterCurrent;
//     }
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="flex justify-center items-center space-x-2 mt-8">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         Previous
//       </button>
//       {startPage > 1 && (
//         <>
//             <button onClick={() => onPageChange(1)} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">1</button>
//             {startPage > 2 && <span className="px-4 py-2 text-gray-500">...</span>}
//         </>
//       )}
//       {pageNumbers.map(number => (
//         <button
//           key={number}
//           onClick={() => onPageChange(number)}
//           className={`px-4 py-2 border rounded-lg ${
//             currentPage === number
//               ? 'bg-primary text-white border-primary'
//               : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//           }`}
//         >
//           {number}
//         </button>
//       ))}
//       {endPage < totalPages && (
//         <>
//           {endPage < totalPages - 1 && <span className="px-4 py-2 text-gray-500">...</span>}
//           <button onClick={() => onPageChange(totalPages)} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">{totalPages}</button>
//         </>
//       )}
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         Next
//       </button>
//     </nav>
//   );
// };

// export default Pagination;


import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <Pagination
        current={currentPage}
        total={totalPages * 10} // antd needs total items, not total pages
        pageSize={10} // 10 items per page (adjust as per your logic)
        onChange={onPageChange}
        showSizeChanger={false} // hide page size dropdown
        // showQuickJumper // enables “Go to page” input box
      />
    </div>
  );
};

export default PaginationComponent;
