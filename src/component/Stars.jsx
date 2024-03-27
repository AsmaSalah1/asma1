import React, { useEffect } from 'react'

function Stars(props) {
  const {reating}=props;
  let ee=[];
    const numOfStar =()=>{
console.log(reating);
        for(let i=0;i<Math.round(reating);i++){
        //  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#e7c413" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
ee[i]=0;
            // return( 
            //     <>
            //    </>  
            //    )
 }
}
useEffect(()=>{
    // for(let i=0;i<Math.round(reating);i++){
    //     console.log("reating",reating);
    //     numOfStar;
    //      }
    //      console.log("numOfStar");
    numOfStar;
},[])
    const numOfStar2 =()=>{
      return  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.5em" viewBox="0 0 24 24"><path fill="#e7c413" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
    }
    return (
    <>
    {numOfStar()}

{ee.map(()=>{
    return numOfStar2()
}
)}
    
    </>
  )
}

export default Stars