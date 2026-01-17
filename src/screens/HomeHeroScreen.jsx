import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const HomeHeroScreen = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800' }}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.main}>
                        <View style={styles.circle}>
                            <TouchableOpacity style={styles.playButton}>
                                <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                Wherever You Play, Your{'\n'}
                                <Text style={styles.titleAccent}>Health Defines Your Game.</Text>
                            </Text>
                            <Text style={styles.subtitle}>
                                Every match counts toward a healthier life.
                            </Text>
                        </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    playButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        bottom: 80,
        left: 24,
        right: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 20,
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 30,
        marginBottom: 8,
    },
    titleAccent: {
        color: '#BFFF00',
    },
    subtitle: {
        fontSize: 13,
        color: '#666666',
        lineHeight: 18,
    },
});
