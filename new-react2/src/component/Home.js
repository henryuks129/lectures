import React,{useState,useEffect} from 'react';
import '../styles/Home.css'

const Home = () => {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    let newUrl = 'https://example-data.draftbit.com/books?_limit=10'
    let fetchedData = async function(){
      try{
        setIsLoading(true)
        const fetched = await fetch(newUrl)
        const resp = await fetched.json()
        setData(resp)
      }finally{
        setIsLoading(false)
      }
    }
  return (
    <div>
      
    </div>
  )
}

export default Home