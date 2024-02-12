// components/Article.js
import React from 'react';
import styles from "../app/page.module.css";
import Link from 'next/link';

const Article = ({ id, title, author, content, isFavorite, toggleFavorite }) => {

  const handleToggleFavorite = () => {
    toggleFavorite(id); 
  };

  return (
    <div className="article">
      <Link href={`/article/${id}`}>
        <h2>{title}</h2>
      </Link>
   
      <p>Author: {author}</p>
      <p className={styles.description}>{content}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default Article;
