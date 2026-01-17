import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { CustomButton } from '../components/CustomButton';
import { BackButton } from '../components/BackButton';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const LocationPermissionScreen = ({ navigation }) => {
    const handleAllow = () => {
        navigation.navigate('Onboarding');
    };

    const handleDeny = () => {
        navigation.navigate('Onboarding');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.main}>
                    <View style={styles.iconContainer}>
                        <MapPin size={80} color={COLORS.accent} strokeWidth={1.5} />
                    </View>

                    <Text style={styles.title}>Enable Location</Text>
                    <Text style={styles.subtitle}>
                        We need access to your location to show nearby sports facilities and matches
                    </Text>
                </View>

                <View style={styles.footer}>
                    <CustomButton
                        title="ALLOW LOCATION ACCESS"
                        onPress={handleAllow}
                        style={styles.button}
                    />
                    <CustomButton
                        title="MAYBE LATER"
                        onPress={handleDeny}
                        variant="google"
                        style={styles.button}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: SPACING.xxl,
    },
    header: {
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.xxl,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: SPACING.xxxl,
    },
    title: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.md,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: SIZES.body,
        color: COLORS.secondary,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: SPACING.xxl,
    },
    footer: {
        paddingBottom: SPACING.xxxl,
    },
    button: {
        marginBottom: SPACING.lg,
    },
});
