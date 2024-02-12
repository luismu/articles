// api.js
import { useState, useEffect } from 'react';

export function useFetchArticles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const articlesData = await response.json();
        
        // Fetch author details for each article
        const articlesWithAuthors = await Promise.all(
          articlesData.map(async (article) => {
            const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${article.userId}`);
            const authorData = await authorResponse.json();
            return {
              ...article,
              author: authorData.name
            };
          })
        );
        
        setData(articlesWithAuthors);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export function useFetchArticleDetails(id) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const articleData = await response.json();
        
        // Fetch author details for the article
        const authorResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${articleData.userId}`);
        const authorData = await authorResponse.json();
        
        // Merge article and author details
        const articleWithAuthor = {
          ...articleData,
          ...authorData
        };

        setArticle(articleWithAuthor);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { article, loading, error };
}
