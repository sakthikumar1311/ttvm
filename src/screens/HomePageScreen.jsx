import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Search, Calendar, User } from 'lucide-react-native';

export const HomePageScreen = () => {
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

                    <View style={styles.bottomNav}>
                        <TouchableOpacity style={styles.navItemActive}>
                            <View style={styles.activeTab}>
                                <Image source={require('../../assets/home.png')} style={styles.homeIcon} />
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
    homeIcon: {
        width: 22,
        height: 22,
        tintColor: '#000000',
    },
    navLabelActive: {
        fontSize: 11,
        color: '#FFFFFF',
        marginTop: 4,
        fontWeight: '500',
    },
});
