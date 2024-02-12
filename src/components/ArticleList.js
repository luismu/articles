// components/ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ articles, toggleFavorite, favorites }) => {
  return (
    <div className="article-list">
      {articles.map(article => (
          <Article key={article.id} {...article}  isFavorite={favorites.includes(article.id)} toggleFavorite={toggleFavorite}/>
      ))}
    </div>
  );
};

export default ArticleList;
