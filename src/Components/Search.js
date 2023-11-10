import React,  {useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';


const Search = () => {
    const[mydata,setdata] =useState([]);
   
    const qp = new URLSearchParams(window.location.search)
    var cname= qp.get("fname")
    //alert(cname)
    useEffect(() => {
        searchingData();
    } 
    )
        const searchingData = async () => {
            
          
            const url = `http://localhost:3000/showempbyname/${cname}`
            try {
               
              const response = await fetch(url)
              const data = await response.json()
              console.log(data)
              setdata(data)
             
            } catch (error) {
              console.log(error)
            }              
        }

       
           
    
    return (
        <div className="row" >
        <div style={{display:'flex',flexWrap:'wrap'}}>
                    {mydata.map(item => (
                        <div key={item.cid} style={{ marginBottom: '20px',width:'30%'}}>
                            <img src={item.images} />
                           
                                <p>{`Firstname: ${item.firstname} LastName : ${item.lastname}`}</p>
                                <p>{`Mobile: ${item.mobile}`}</p>
                                {/* <Link  to={'/SearchContact?c='+ item.firstname} className="btn btn-success">Search</Link> */}
                           
                    
        

                        </div>
                    ))}
                </div>
                </div>
    );
};

export default Search;