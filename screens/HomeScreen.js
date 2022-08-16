import { View, Text, Image } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react' 
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import { ScrollView, TextInput } from 'react-native-web';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import SanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories,setFeaturedCategories]=useState([])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

    useEffect(()=>{
      SanityClient.fetch(`

      *[_type == "featured"]{
        ...,
        restaurants[]->{
        ...,
        dishes[]->
        }
        }`)
        .then(data =>{
  setFeaturedCategories(data)
})

    },[])
    // console.log(featuredCategories) for checking

  return (
    <SafeAreaView className='bg-white pt-5'>
    
        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <Image
            source={{
                uri:'https://www.elluminatiinc.com/wp-content/uploads/2020/05/fddelapdev/fddelapdev2.png',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />

        <View className="flex-1">
          <Text className='font-bold text-gray-400 text-xs' >Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location
          <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
    
        </View>
            
        <UserIcon size={35} color='#00CCBB'/>
        </View>
            {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 ">
          <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 ">
            <SearchIcon color="gray" size={20}/>
           <TextInput
           placeholder="Restaurants and cuisines"
           keyboardType="default"
           />
           

        </View>
          <AdjustmentsIcon color="#00CCBB"/>
        </View>
        {/* Body */}
        <ScrollView className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        >
          {/* Categories */}
          <Categories/>

          {/* Featured Rows */}
          
          {featuredCategories?.map((category) => (
          <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
          
          />
          ))}
          {/* Tasty Discounts */}
          {/* <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description="Everyone's been enjoying these juicy discounts!"
          
          /> */}
          {/* Offers near you */}
          {/* <FeaturedRow
          id='12345'
          title='Offers near you!'
          description='Why not support your local restaurant tonight!'
          
          /> */}

        </ScrollView>
     
    </SafeAreaView>
  );
};

export default HomeScreen;
