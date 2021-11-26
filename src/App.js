import React, {useEffect ,useState} from 'react';
import { useGlobalContext } from './context';
import Follower from './Follower';
import './App.css';

function App() {

  const {loading, page,data ,handlePage , prevPage, nextPage} =useGlobalContext()

 
  return (
    <main>
     <div className='section'>
       <div className='section-title'>{loading ? <h1>loading....</h1> :<h1>Pagiantion</h1>}</div>
       <div className="underline"></div>
     </div>
     <div className='followers'>
       <div className='container'>
         {data.map((follower)=>{
           return(

            <Follower key={follower.id} {...follower}/>
           )
         })}
       </div>
       {/* the btn part */}
        {/* first check for loading if is not true then show  then dispaly btn-container*/}
        {!loading && 
        <div className='btn-container'>
       <button className='prev-btn' onClick={prevPage}>       prev    </button>
         {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
        <button className='next-btn' onClick={nextPage}>   next    </button>
       </div>}
       
     </div>
    </main>
  );
}

export default App;
