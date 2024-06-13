import { Stack } from 'expo-router';

const GamesLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, headerTitle: 'Games' }}/>
    </Stack>
  );
};

export default GamesLayout;
