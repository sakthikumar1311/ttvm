import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { BackButton } from '../components/BackButton';
import { COLORS, SPACING, SIZES } from '../constants/theme';

export const EmailVerificationScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleVerify = () => {
        navigation.navigate('LocationPermission');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <View style={styles.header}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>

                <View style={styles.main}>
                    <Text style={styles.title}>Verify Your Email</Text>
                    <Text style={styles.subtitle}>
                        We'll send you a verification code to confirm your email address
                    </Text>

                    <View style={styles.inputSection}>
                        <CustomInput
                            label="EMAIL"
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            isValid={email.includes('@')}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                    <CustomButton
                        title="SEND VERIFICATION CODE"
                        onPress={handleVerify}
                    />
                </View>
            </KeyboardAvoidingView>
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
    },
    title: {
        fontSize: SIZES.h1,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
    subtitle: {
        fontSize: SIZES.body,
        color: COLORS.secondary,
        marginBottom: SPACING.xxxl,
        lineHeight: 24,
    },
    inputSection: {
        marginTop: SPACING.xxl,
    },
    footer: {
        paddingBottom: SPACING.xxxl,
    },
});
