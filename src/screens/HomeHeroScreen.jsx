import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { usePagerNavigation } from '../navigation/PagerNavigationContext';

export const HomeHeroScreen = () => {
    const { scrollToScreen, screens } = usePagerNavigation();

    const handleCameraPress = () => {
        // Camera/Plus button action
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800' }}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.main}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>
                                Wherever You Play, Your{'\n'}
                                <Text style={styles.titleAccent}>Health</Text> Defines Your Game.
                            </Text>
                            <Text style={styles.subtitle}>
                                Every match counts toward a healthier life.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.cameraButtonContainer}>
                        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraPress}>
                            <Plus size={32} color="#FFFFFF" strokeWidth={3} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    main: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 20,
        borderRadius: 0,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFFFFF',
        lineHeight: 30,
        marginBottom: 8,
    },
    titleAccent: {
        color: '#BFFF00',
    },
    subtitle: {
        fontSize: 13,
        color: '#FFFFFF',
        lineHeight: 18,
        opacity: 0.9,
    },
    cameraButtonContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    cameraButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
