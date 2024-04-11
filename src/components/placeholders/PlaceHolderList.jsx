import React from 'react';
import PlaceholderCard from './PlaceholderCard';

const PlaceHolderList = () => {

    

  return (
    <div>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 ">
        {Array.from({ length: 10 }, (_, index) => (
        <PlaceholderCard key={index}></PlaceholderCard>
      ))}
        </div>
        
    </div>
  );
};

export default PlaceHolderList;
