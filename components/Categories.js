import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { ScrollView } from 'react-native-web'
import SanityClient from '../sanity'

const Categories = () => {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
    SanityClient.fetch(`

        *[_type == "category"]
        `)
      .then((data) =>{
        // setCategories(data?.categories);
      });
  },[]);

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontlScrollIndicator={false}
    >
        {/* CategoryCard */}
        {categories.map((category) => (
          <CategoryCard 
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()} 
          title={category.name}  />
          ))}
        
    </ScrollView>
  );
};

export default Categories;