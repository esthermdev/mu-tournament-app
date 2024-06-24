import { router } from 'expo-router';
import { View, Button } from 'react-native';

const AdminScreen = () => {
  return (
        <View>
            <Button
                title="Add Team"
                onPress={() => router.push('/admin/addTeam')}
            />
        </View>
  );
};

export default AdminScreen;
