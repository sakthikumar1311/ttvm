import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Home, Search, Calendar, User } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const HomeScreen = ({ navigation }) => {
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
                                <Text style={styles.titleAccent}>Health Defines Your Game.</Text>
                            </Text>
                            <Text style={styles.subtitle}>
                                Every match counts toward a healthier life.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.bottomNav}>
                        <View style={styles.navItem}>
                            <View style={styles.navButton}>
                                <Home size={24} color={COLORS.text} fill={COLORS.accent} />
                            </View>
                            <Text style={styles.navLabel}>Home</Text>
                        </View>

                        <View style={styles.navItem}>
                            <View style={styles.navButtonInactive}>
                                <Search size={24} color={COLORS.text} />
                            </View>
                        </View>

                        <View style={styles.navItem}>
                            <View style={styles.navButtonInactive}>
                                <Calendar size={24} color={COLORS.text} />
                            </View>
                        </View>

                        <View style={styles.navItem}>
                            <View style={styles.navButtonInactive}>
                                <User size={24} color={COLORS.text} />
                            </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.xxl,
    },
    main: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: SPACING.xxxl,
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: SPACING.xxl,
        borderRadius: SIZES.radiusMedium,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.md,
        lineHeight: 32,
    },
    titleAccent: {
        color: COLORS.accent,
    },
    subtitle: {
        fontSize: SIZES.small,
        color: COLORS.secondary,
        lineHeight: 20,
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radiusLarge,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        marginBottom: SPACING.xxl,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        alignItems: 'center',
    },
    navButton: {
        backgroundColor: COLORS.accent,
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
        borderRadius: SIZES.radiusMedium,
    },
    navButtonInactive: {
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.sm,
    },
    navLabel: {
        fontSize: SIZES.tiny,
        color: COLORS.white,
        marginTop: SPACING.xs,
        fontWeight: '500',
    },
});
