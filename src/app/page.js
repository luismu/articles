"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import ArticleList from "../components/ArticleList";
import FavoriteCounter from "../components/FavoriteCounter";
import {useFetchArticles}  from "../services/api";

export default function Home() {
  const [favorites, setFavorites] = useState([]);
  const { data, loading, error } = useFetchArticles();

  // Save favorites to localStorage whenever it changes

    // Load favorites from localStorage on initial render
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status of an article
  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
  };

    // Handle loading and error states
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  

  return (
    <main className={styles.main}>
      {/* Integration of ArticleList and FavoriteCounter */}
      <FavoriteCounter totalFavorites={favorites.length} />
      <ArticleList articles={data} favorites={favorites} toggleFavorite={toggleFavorite} />
    </main>
  );
}
