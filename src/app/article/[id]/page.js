'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ArticleDetails from '../../../components/ArticleDetails';
import {useFetchArticleDetails}  from "../../../services/api";

const ArticlePage = ({ params }) => {
  const id = params.id;

    const { article, loading, error } = useFetchArticleDetails(id);

  return (
    <div>
      <ArticleDetails article={article} loading={loading} error={error}   />
    </div>
  );
};

export default ArticlePage;
