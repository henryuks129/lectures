import React, { useEffect, useState } from 'react'


const About = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)
    const [num,setNum] = useState(0)
    // useEffect(()=>{
    //     console.log('useEffect ran' + num + 'times');
    // },[])

    // useEffect(()=>{
    //     fetch('')
    //     .then((res) => res.json())
    //     .then((resp) => console.log(resp))
    // .catch((e) => console.log(e))
    // })
    let url = 'https://fakestoreapi.com/products'
    let fetchedData = async function(){
        try{
            setIsLoading(true)
            const dataFetched = await fetch(url)
            const response = await dataFetched.json()
            console.log(response);
            setData(response)
        }catch(error){
            console.log(error);
            setError(error)
        }finally{
            setIsLoading(false)
        }
    }
    
    useEffect(()=>{
        setTimeout(fetchedData,8000)
        fetchedData()
    },[])
    console.log('outside useEffect hook');
  return (
    <div>
        <h2>This is about component</h2>
        <h2> {num} </h2>
        <div>
            {data.map((datum)=>{
                const {id,image,title,description} = datum
                return(
                    <div key={id}>
                        <img src={image} alt={title} />
                        <h2> {title} </h2>
                        <p> {description} </p>
                    </div>
                )
            } 
            )}
        </div>
        {/* <button onClick={()=> setNum((prev)=> prev + 1)}>click</button> */}
    </div>
  )
}

export default About