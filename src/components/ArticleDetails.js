// components/ArticleDetails.js
import React from 'react';
import { useRouter } from 'next/navigation';

const ArticleDetails = ({ article, loading, error }) => {
  const router = useRouter();
 console.log(article)

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>error...{error.message}</p>
  }

  return (
    <div className="article-details">
      <h1>Article Details</h1>

       <button onClick={() => router.back()}>Back</button>
       <div className='details'>
        <div className='header-detail'>
          <h2>{article.title}</h2>
          <p className='email'> {article.email}</p>
          <p className='username'>@{article.username}</p>
        </div>
        
        <p className='body'>{article.body} </p>
       </div>
     
    </div>
  );
};

export default ArticleDetails;
