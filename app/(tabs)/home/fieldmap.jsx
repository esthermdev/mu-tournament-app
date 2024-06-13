import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { images } from '../../../constants';
import Header from '../../../components/Header';
import { router } from 'expo-router';

const FieldMap = () => {
    return (
        <>
            <Header 
                title='Field Map'
                handlePress={() => router.back()}
                backTitle='Home'
            />
            <ScrollView 
                contentContainerStyle={styles.container}
                maximumZoomScale={2}
                minimumZoomScale={1}
            >
                <Image 
                    source={images.fieldMap}
                    className='w-full rotate-90 h-full'
                    resizeMode='contain'
                    style={styles.image}
                />
            </ScrollView>
        </>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        aspectRatio: 1
    }
})

export default FieldMap