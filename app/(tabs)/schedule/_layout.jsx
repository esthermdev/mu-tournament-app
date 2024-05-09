import React from 'react'
import { Stack } from 'expo-router';

const ScheduleLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen 
              name='index'
              options={{ headerShown: false, headerTitle: 'Schedule' }}
          />
      </Stack>
    </>
    
  )
}

export default ScheduleLayout;