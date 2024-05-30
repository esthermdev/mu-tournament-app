import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#DB3228' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 30
    },
    loadingText: {
        color: '#DB3228',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default Loading;