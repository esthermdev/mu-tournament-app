import React from 'react'
import { Stack } from 'expo-router';

const RankingsLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen 
              name='index'
              options={{ headerShown: false, headerTitle: 'Rankings' }}
          />
      </Stack>
    </>
    
  )
}

export default RankingsLayout;