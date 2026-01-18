import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react-native';

function VerificationScreen({ navigation }) {

  // BACK → SIGNUP
  const handleBack = () => {
    navigation.goBack();
  };

  // CONTINUE → LOCATION
  const handleContinue = () => {
    navigation.navigate('Location');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <ArrowLeft size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* MAIN */}
        <View style={styles.main}>
          <Text style={styles.title}>
            <Text style={styles.titleAccent}>Turf Identifier System</Text>
            {'\n'}Verification
          </Text>

          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Mail size={64} color="#000000" strokeWidth={1.5} />
              <View style={styles.checkmarkBadge}>
                <CheckCircle size={28} color="#34C759" fill="#34C759" />
              </View>
            </View>
          </View>

          {/* CLICKABLE TEXT → LOCATION */}
          <TouchableOpacity onPress={handleContinue}>
            <Text style={styles.description}>
              We've sent you an email for verification.{'\n'}
              Please check your inbox.
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

export default VerificationScreen;

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
    fontWeight: 'bold',
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
