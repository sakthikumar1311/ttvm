import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { X, Mail, CheckCircle } from 'lucide-react-native';

export const VerificationScreen = ({ navigation }) => {
    const handleBack = () => {
        navigation?.goBack();
    };

    const handleContinue = () => {
        navigation?.navigate('LocationPermission');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton} 
                        onPress={handleBack}
                        activeOpacity={0.7}
                    >
                        <View style={styles.backButtonInner}>
                            <X size={20} color="#FFFFFF" strokeWidth={2.5} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>
                        <Text style={styles.titleAccent}>Turf Identifier System</Text>
                        {'\n'}Verification
                    </Text>

                    <View style={styles.iconContainer}>
                        <View style={styles.iconWrapper}>
                            <Mail size={64} color="#000000" strokeWidth={1.5} />
                            <View style={styles.checkmarkBadge}>
                                <CheckCircle size={28} color="#34C759" fill="#34C759" />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.description}>
                        Please verify your email to proceed to the dashboard.
                    </Text>

                    <TouchableOpacity 
                        style={styles.continueButton}
                        onPress={handleContinue}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
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
    },
    backButtonInner: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
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
        fontWeight: '700',
    },
    iconContainer: {
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWrapper: {
        position: 'relative',
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmarkBadge: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 24,
        marginBottom: 48,
    },
    continueButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1C1C1E',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
});
