import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { usePagerNavigation } from '../navigation/PagerNavigationContext';

export const VerificationScreen = () => {
    const { scrollToScreen, screens } = usePagerNavigation();

    const handleBack = () => {
        scrollToScreen(screens.SIGN_UP);
    };

    const handleContinue = () => {
        scrollToScreen(screens.LOCATION);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                        <ArrowLeft size={24} color="#000000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>
                        Turf Identifier <Text style={styles.titleAccent}>System</Text> Verification
                    </Text>

                    <View style={styles.iconContainer}>
                        <View style={styles.iconBackground}>
                            <Mail size={64} color="#000000" strokeWidth={1.5} />
                            <View style={styles.checkmarkBadge}>
                                <CheckCircle size={28} color="#34C759" fill="#34C759" />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.description}>
                        Please verify your email to proceed to the dashboard
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 48,
        lineHeight: 32,
    },
    titleAccent: {
        color: '#BFFF00',
    },
    iconContainer: {
        marginBottom: 32,
    },
    iconBackground: {
        position: 'relative',
        padding: 20,
    },
    checkmarkBadge: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
    },
    description: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 20,
    },
});
