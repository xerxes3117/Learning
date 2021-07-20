import React, { useState, useEffect } from 'react'
import { SkeletonArticle } from '../skeletons/SkeletonArticle';

function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await result.json();
      setArticles(data)
    }, 50000)
  })

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles?.map(article => (
        <div className="article" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}

      {!articles && [1,2,3,4,5].map(n => (
        <SkeletonArticle key={n} theme="light"/>
      ))}
    </div>
  )
}

export default Articles
