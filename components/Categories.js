import { View, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { ScrollView } from 'react-native-web'

const Categories = () => {
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
        <CategoryCard imgUrl='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' title="Testing 1"  />
        <CategoryCard imgUrl='https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/steak-n-shake-7x7-steakburger.jpg?quality=82&strip=1' title="Testing 2"  />
        <CategoryCard imgUrl='https://cdn.britannica.com/50/80550-131-273A1906/Scoops-kinds-ice-cream.jpg' title="Testing 3"  />
        <CategoryCard imgUrl='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574' title="Testing 3"  />
        <CategoryCard imgUrl='https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg' title="Testing 3"  />
        <CategoryCard imgUrl='https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' title="Testing 3"  />
        <CategoryCard imgUrl='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' title="Testing 1"  />
        <CategoryCard imgUrl='https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/steak-n-shake-7x7-steakburger.jpg?quality=82&strip=1' title="Testing 2"  />
        <CategoryCard imgUrl='https://cdn.britannica.com/50/80550-131-273A1906/Scoops-kinds-ice-cream.jpg' title="Testing 3"  />
        <CategoryCard imgUrl='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574' title="Testing 3"  />
        <CategoryCard imgUrl='https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg' title="Testing 3"  />
        <CategoryCard imgUrl='https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg' title="Testing 3"  />
        
      
    </ScrollView>
  )
}

export default Categories