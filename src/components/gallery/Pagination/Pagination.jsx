import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page-item">
        <a href="#" className="page-link active">1</a>
      </div>
      <div className="page-item">
        <a href="#" className="page-link">2</a>
      </div>
      <div className="page-item">
        <a href="#" className="page-link">3</a>
      </div>
      <div className="page-item">
        <a href="#" className="page-link">{'>'}</a>
      </div>
    </div>
  );
};

export default Pagination;