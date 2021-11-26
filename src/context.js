import React, {useContext ,useState, useEffect } from "react";

import paginate from "./util";
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] =useState(false)
    const [data ,setData] =useState([])
    const [page ,setPage] =useState(0)
   


    const handlePage=(index)=>{
     setPage(index)
    }
    const prevPage=()=>{
    const oldPage= page
    if(oldPage>0){
        setPage(oldPage-1)
    }else{
        setPage(9)
    }
   }
   const nextPage=()=>{
    const oldPage= page
    if(oldPage<10){
        setPage(oldPage+1)
    }if(oldPage>10){
       setPage(0)
    }
   
   }

    console.log(page)

    const fetchData = async()=>{
        const response = await fetch(url)
        const data= await response.json()

/*    how to cahnge the big array to an array of array  */
        const itemPorPage= 10;
        const numberOfPages = Math.ceil(data.length/itemPorPage)

        const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemPorPage
       
        return data.slice(start, start + itemPorPage)
        })
        /*    how to cahnge the big array to an array of array  */
       setData(newFollowers[page])
    }
    useEffect(()=>{
        fetchData()
    },[page])
  
    return(
        <AppContext.Provider value={{loading,  data ,page ,handlePage, prevPage ,nextPage}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext , AppProvider}