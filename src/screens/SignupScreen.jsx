import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from 'react-native';
import { X, Check, Eye, EyeOff } from 'lucide-react-native';

export const SignupScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {
        navigation?.navigate('Verification');
    };

    const handleGoogleSignIn = () => {
        navigation?.navigate('Verification');
    };

    const handleLogin = () => {
        navigation?.navigate('SignIn');
    };

    const handleBack = () => {
        navigation?.goBack();
    };

    const isUsernameValid = username.length > 3;
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length > 6;

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
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
                <Text style={styles.title}>Create your account</Text>

                    <TouchableOpacity 
                        style={styles.googleButton}
                        onPress={handleGoogleSignIn}
                        activeOpacity={0.8}
                    >
                        <View style={styles.googleIcon}>
                            <Text style={styles.googleG}>G</Text>
                        </View>
                    <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>OR CREATE WITH EMAIL</Text>
                    <View style={styles.dividerLine} />
                </View>

                    <View style={styles.inputSection}>
                        <Text style={styles.label}>USERNAME</Text>
                <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                                placeholder=""
                                placeholderTextColor="#C7C7CC"
                            value={username}
                            onChangeText={setUsername}
                                autoCapitalize="none"
                        />
                            {isUsernameValid && (
                                <Check size={20} color="#34C759" style={styles.checkIcon} />
                        )}
                    </View>
                </View>

                    <View style={styles.inputSection}>
                        <Text style={styles.label}>EMAIL</Text>
                <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                                placeholder=""
                                placeholderTextColor="#C7C7CC"
                            value={email}
                            onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                        />
                            {isEmailValid && (
                                <Check size={20} color="#34C759" style={styles.checkIcon} />
                        )}
                    </View>
                </View>

                    <View style={styles.inputSection}>
                    <Text style={styles.label}>PASSWORD</Text>
                        <View style={styles.passwordContainer}>
                        <TextInput
                                style={styles.passwordInput}
                                placeholder=""
                                placeholderTextColor="#C7C7CC"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            />
                            <View style={styles.passwordIcons}>
                                {isPasswordValid && (
                                    <Check size={20} color="#34C759" style={styles.checkIcon} />
                                )}
                                <TouchableOpacity 
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.passwordToggle}
                                >
                            {showPassword ? (
                                <EyeOff size={20} color="#8E8E93" />
                            ) : (
                                <Eye size={20} color="#8E8E93" />
                            )}
                        </TouchableOpacity>
                            </View>
                    </View>
                </View>

                    <TouchableOpacity 
                        style={styles.signupButton}
                        onPress={handleSignup}
                        activeOpacity={0.8}
                    >
                    <Text style={styles.signupButtonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.footerText}>
                        ALREADY HAVE AN ACCOUNT? <Text style={styles.footerLink}>LOGIN</Text>
                    </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
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
        paddingTop: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 32,
        textAlign: 'left',
    },
    googleButton: {
        height: 56,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DADCE0',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        paddingHorizontal: 16,
    },
    googleIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#4285F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    googleG: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
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
        fontWeight: '500',
    },
    inputSection: {
        marginBottom: 20,
    },
    label: {
        fontSize: 12,
        color: '#8E8E93',
        marginBottom: 8,
        letterSpacing: 0.5,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        paddingVertical: 12,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        paddingVertical: 12,
    },
    passwordIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkIcon: {
        marginRight: 8,
    },
    passwordToggle: {
        padding: 4,
    },
    signupButton: {
        height: 56,
        backgroundColor: '#1C1C1E',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    signupButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
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
