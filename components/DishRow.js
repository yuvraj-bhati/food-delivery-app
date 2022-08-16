import { View, Text } from 'react-native'
import React from 'react'

import { TouchableOpacity } from 'react-native-web'

const DishRow = ({id,name,description,price,image}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text className='text-lg mb-1'>{name}</Text>
        <Text className='text-gray-400'>{description}</Text>
        <Text className='text-gray-400 mt-2'>INR {price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DishRow