import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = () => {
  return (
    <section className="page-header">
      <div className="container">
        <h1>Galeri Produk</h1>
        <ul className="breadcrumb">
          <li><Link to="/">Beranda</Link></li>
          <li>{'>'}</li>
          <li>Galeri Produk</li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;