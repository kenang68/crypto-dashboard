import { useEffect, useState } from "react"
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/news',
      /*url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      }*/
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      setArticles(response.data)

    }).catch((error) => {
      console.error(error)
    })
  }, [])

  console.log(articles)

  const first7Articles = articles?.slice(0,7)

    return (
      <div className="news-feed">
        <h2>News Feed</h2>
        
      </div>
    )
  }

  /*{first7Articles?.map( (articles, _index) => (
    <div key={_index} >
      <a href={articles.url} ><p>{articles.title}</p></a>
    </div>))}*/
  
  export default NewsFeed;