import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { usePagerNavigation } from '../navigation/HorizontalPager';

export const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { scrollToScreen, screens } = usePagerNavigation();

    const handleLogin = () => {
        scrollToScreen(screens.HOME);
    };

    const handleSignUp = () => {
        scrollToScreen(screens.SIGN_UP);
    };

    const handleBack = () => {
        scrollToScreen(screens.HOME);
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
                    <Text style={styles.title}>Welcome Back!</Text>

                    <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
                        <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
                    </TouchableOpacity>

                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR LOG IN WITH EMAIL</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>EMAIL</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholderTextColor="#C7C7CC"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>PASSWORD</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputPassword}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                placeholderTextColor="#C7C7CC"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                {showPassword ? (
                                    <EyeOff size={20} color="#8E8E93" />
                                ) : (
                                    <Eye size={20} color="#8E8E93" />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>LOG IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={handleSignUp}>
                        <Text style={styles.footerText}>
                            CREATE NEW ACCOUNT <Text style={styles.footerLink}>SIGN UP</Text>
                        </Text>
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
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
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
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 32,
    },
    googleButton: {
        height: 56,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DADCE0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    googleText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        letterSpacing: 0.5,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E5EA',
    },
    dividerText: {
        fontSize: 11,
        color: '#8E8E93',
        marginHorizontal: 12,
        letterSpacing: 0.5,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        color: '#8E8E93',
        marginBottom: 8,
        letterSpacing: 0.5,
        fontWeight: '500',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
        paddingVertical: 12,
        fontSize: 16,
        color: '#000000',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    inputPassword: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#000000',
    },
    eyeIcon: {
        padding: 8,
    },
    loginButton: {
        height: 56,
        backgroundColor: '#1C1C1E',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 16,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    forgotPassword: {
        alignItems: 'center',
        padding: 12,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#8E8E93',
    },
    footer: {
        paddingBottom: 32,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 13,
        color: '#8E8E93',
        letterSpacing: 0.3,
    },
    footerLink: {
        color: '#000000',
        fontWeight: '600',
    },
});
