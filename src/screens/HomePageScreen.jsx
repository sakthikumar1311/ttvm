import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

export const HomePageScreen = ({ navigation }) => {
    const handlePlayPress = () => {
        navigation?.navigate('SignIn');
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80' }}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.main}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                Wherever You Play, Your{' '}
                                <Text style={styles.titleAccent}>Health</Text>
                                {' '}Defines Your Game.
                            </Text>
                            <Text style={styles.subtitle}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity 
                            style={styles.playButton}
                            onPress={handlePlayPress}
                            activeOpacity={0.8}
                        >
                            <Play size={24} color="#FFFFFF" fill="#FFFFFF" />
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
    textContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 20,
        borderRadius: 12,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000000',
        lineHeight: 30,
        marginBottom: 8,
    },
    titleAccent: {
        color: '#BFFF00',
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 13,
        color: '#8E8E93',
        lineHeight: 18,
        marginTop: 4,
    },
    bottomContainer: {
        alignItems: 'center',
        paddingBottom: 32,
    },
    playButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
});
