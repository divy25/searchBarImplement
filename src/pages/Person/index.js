
import React from 'react';
import './index.css';
import { Link, useParams } from 'react-router-dom';
import {useDebouncer, useFetch} from "../Home/CustomHooks/useHooks"
import PersonCard from './PersonCard';

function Person() {
  const { id} = useParams();
  const debouncedQuery = useDebouncer(id, 400);
  const { isLoading, isError, data } = useFetch( `https://swapi.dev/api/people/?search=${debouncedQuery }`);

 
  return (
    <div className="person">
      
      <div id="container">
            {isLoading ? (
              <div> 
                   
              </div>
            ) : isError ? (
              <div> Something went wrong </div>
            ) : (
              data.results &&
              data.results?.map((item) => (
               <div> 
                <PersonCard
                  key={item.url}
                 
                  item={item}
                 style={{color:"white"}}
                 showLink={false}
                />
                
              </div>
              ))
            )}
            <div  style={{position:'relative',marginLeft: "300px",marginTop:"420px",textDecoration:"none",color:"white"}}><Link to="/">Go Back</Link></div>
          </div>
    </div>
  );
}

export default Person;