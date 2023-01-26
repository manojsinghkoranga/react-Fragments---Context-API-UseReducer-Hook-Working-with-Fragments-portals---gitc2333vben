import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  
  return(
    <>
      {
        listx.map((element) => {
         return <ListItems valuex={element} />
        })
      }
    </>
  )
}

export default List;