import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const OnboardingScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('Login');
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
                                <Text style={styles.titleAccent}>Health Defines Your Game.</Text>
                            </Text>
                            <Text style={styles.subtitle}>
                                Every match counts toward a healthier life.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <CustomButton
                            title="GET STARTED"
                            onPress={handleGetStarted}
                            style={styles.button}
                        />
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
    footer: {
        paddingBottom: SPACING.xxxl,
    },
    button: {
        backgroundColor: COLORS.primary,
    },
});
