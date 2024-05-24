import React from 'react'
import { Stack } from 'expo-router';

const TeamsLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen 
              name='index'
              options={{ headerShown: false, headerTitle: 'Teams' }}
          />
      </Stack>
    </>
    
  )
}

export default TeamsLayout;