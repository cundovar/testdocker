import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {

  

    const [jsonData, setJsonData] = useState(null);

    const [title, setTitle] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost/catalog/f643899d-ff85-4307-8f4f-f4d993c4dc67?format=jsonld');
          setJsonData(response.data);
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  



    useEffect(()=>{
if(jsonData){


    const graphData = jsonData[0]?.['@graph'];
    console.log(graphData)

    
if (jsonData) {
    const titleValue = graphData[1]?.['http://purl.org/dc/terms/title']?.[0]?.['@value'];
    const namevalue=graphData[0]?.['http://xmlns.com/foaf/0.1/name']?.[0]?.['@value'];
    const descriptionValue=graphData[1]?.['http://purl.org/dc/terms/description']?.[0]?.['@value'];
  

    setTitle(titleValue);
    setName(namevalue)
    setDescription(descriptionValue)


}
      
      }

    },[jsonData])
  
    
  
    return (
      <div>
        <h1>données fair data point</h1>
       <div className='left'>
        <h2>info catalog</h2>
     
      {title && <h3>titre:{title}</h3>}
      { description && <p>description:{description}</p>}
      { name && <p>auteur:{name}</p>}
    
    </div>
    
      </div>
    );
  };


export default Main;


