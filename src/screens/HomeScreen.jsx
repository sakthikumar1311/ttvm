import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Bottom White Card */}
        <View style={styles.card}>
          <Text style={styles.title}>
            Wherever You Play, Your{" "}
            <Text style={styles.highlight}>Health</Text> Defines Your Game.
          </Text>

          <Text style={styles.subtitle}>
            Every match counts toward a healthier life.
          </Text>

          {/* Circle Button → LOGIN */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Ionicons name="arrow-forward" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#111",
  },
  highlight: {
    color: "#9BE11F",
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  button: {
    marginTop: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
});
