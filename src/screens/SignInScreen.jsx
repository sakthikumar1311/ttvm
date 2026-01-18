import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Main');
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View className="flex-1 bg-white px-6">
            <View className="pt-4 pb-4">
                <TouchableOpacity
                    className="w-11 h-11 bg-white rounded-2xl justify-center items-center shadow-md"
                    onPress={handleBack}
                >
                    <ArrowLeft size={24} color="#000000" />
                </TouchableOpacity>
            </View>

            <View className="flex-1">
                <Text className="text-3xl font-bold text-black text-center mb-8">Welcome Back!</Text>

                <TouchableOpacity
                    className="h-14 bg-white border border-gray-300 rounded-2xl justify-center items-center mb-6"
                    onPress={handleLogin}
                >
                    <Text className="text-base font-medium text-black uppercase tracking-wide">CONTINUE WITH GOOGLE</Text>
                </TouchableOpacity>

                <View className="flex-row items-center mb-6">
                    <View className="flex-1 h-px bg-gray-300" />
                    <Text className="text-xs text-gray-500 mx-3 uppercase tracking-wide">OR LOG IN WITH EMAIL</Text>
                    <View className="flex-1 h-px bg-gray-300" />
                </View>

                <View className="mb-5">
                    <Text className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">EMAIL</Text>
                    <TextInput
                        className="border-b border-gray-300 pb-3 text-base text-black"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#C7C7CC"
                    />
                </View>

                <View className="mb-5">
                    <Text className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">PASSWORD</Text>
                    <View className="flex-row items-center border-b border-gray-300">
                        <TextInput
                            className="flex-1 pb-3 text-base text-black"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#C7C7CC"
                        />
                        <TouchableOpacity className="p-2" onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <EyeOff size={20} color="#8E8E93" />
                            ) : (
                                <Eye size={20} color="#8E8E93" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    className="h-14 bg-black rounded-2xl justify-center items-center mb-4"
                    onPress={handleLogin}
                >
                    <Text className="text-lg font-semibold text-white uppercase tracking-wide">LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity className="items-center py-3">
                    <Text className="text-base text-gray-500">Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View className="pb-8 items-center">
                <TouchableOpacity onPress={handleSignUp}>
                    <Text className="text-sm text-gray-500">
                        CREATE NEW ACCOUNT <Text className="text-black font-semibold">SIGN UP</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
