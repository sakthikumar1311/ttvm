import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Play, Home, Search, Calendar, User } from 'lucide-react-native';

export const HomeHeroScreen = () => {
    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
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

                    <View style={styles.bottomNav}>
                        <TouchableOpacity style={styles.navItemActive}>
                            <View style={styles.activeTab}>
                                <Home size={22} color="#000000" />
                            </View>
                            <Text style={styles.navLabelActive}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navItem}>
                            <Search size={22} color="#FFFFFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navItem}>
                            <Calendar size={22} color="#FFFFFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.navItem}>
                            <User size={22} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        justifyContent: 'space-between',
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
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1E',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 24,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItemActive: {
        alignItems: 'center',
    },
    navItem: {
        padding: 8,
    },
    activeTab: {
        backgroundColor: '#BFFF00',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    navLabelActive: {
        fontSize: 11,
        color: '#FFFFFF',
        marginTop: 4,
        fontWeight: '500',
    },
});
