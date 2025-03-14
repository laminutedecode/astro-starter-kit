import React, { useEffect, useState } from 'react'
import client from '@sanity/client'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  const getArticles = async () => {
    try {
      console.log('🔹 Début de la récupération des articles...')
  
      const query = `*[_type == "article"] { _id, title, slug, body }`
      const articles = await client.fetch(query)
  
      console.log('🔹 Articles récupérés:', articles)
  
      return articles
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des articles :', error)
      return []
    }
  }
  
  
  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticles()
      setArticles(fetchedArticles)
      setLoading(false)
    }

    fetchArticles()
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </div>
        ))
      ) : (
        <div>Aucun article trouvé</div>
      )}
    </div>
  )
}

export default Articles
