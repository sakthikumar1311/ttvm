import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import { COLORS, SPACING, SIZES } from '../constants/theme';
import { usePagerNavigation } from '../navigation/PagerNavigationContext';

export const LocationScreen = () => {
    const { scrollToScreen, screens } = usePagerNavigation();

    const handleEnable = () => {
        scrollToScreen(screens.HOME_HERO);
    };

    const handleBack = () => {
        scrollToScreen(screens.VERIFICATION);
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
                        Enable <Text style={styles.titleAccent}>precise location</Text>
                    </Text>

                    <View style={styles.iconContainer}>
                        <View style={styles.mapIconWrapper}>
                            <View style={styles.mapGrid}>
                                <View style={styles.horizontalLine} />
                                <View style={styles.verticalLine} />
                            </View>
                            <View style={styles.locationPin}>
                                <MapPin size={24} color="#000000" fill="#000000" />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.description}>
                        Your location will be used to show people near you.
                    </Text>

                    <TouchableOpacity style={styles.enableButton} onPress={handleEnable}>
                        <Text style={styles.enableButtonText}>Enable Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.maybeLater} onPress={handleEnable}>
                        <Text style={styles.maybeLaterText}>Remind me later</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 48,
    },
    titleAccent: {
        color: '#BFFF00',
    },
    iconContainer: {
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapIconWrapper: {
        width: 120,
        height: 120,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapGrid: {
        width: 100,
        height: 100,
        borderWidth: 1.5,
        borderColor: '#000000',
        borderRadius: 8,
        position: 'relative',
        overflow: 'hidden',
    },
    horizontalLine: {
        position: 'absolute',
        width: 100,
        height: 1,
        backgroundColor: '#000000',
        top: 50,
        opacity: 0.3,
    },
    verticalLine: {
        position: 'absolute',
        width: 1,
        height: 100,
        backgroundColor: '#000000',
        left: 50,
        opacity: 0.3,
    },
    locationPin: {
        position: 'absolute',
        top: 35,
        left: 38,
    },
    description: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 48,
    },
    enableButton: {
        width: '100%',
        height: 56,
        backgroundColor: '#1C1C1E',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    enableButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    maybeLater: {
        padding: 12,
    },
    maybeLaterText: {
        fontSize: 14,
        color: '#8E8E93',
    },
});
