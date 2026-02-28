import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function LoginScreen() {
  const { theme, isDark } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const successScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleLogin = () => {
    setError("");
    if (!email || !password) { setError("Please enter your email and password."); return; }
    if (!email.includes("@")) { setError("Please enter a valid email address."); return; }
    if (password.length < 4) { setError("Password must be at least 4 characters."); return; }

    setLoggedIn(true);
    Animated.spring(successScale, { toValue: 1, friction: 5, useNativeDriver: true }).start(() => {
      setTimeout(() => router.back(), 1000);
    });
  };

  if (loggedIn) {
    return (
      <View style={[styles.successContainer, { backgroundColor: theme.background }]}>
        <Animated.View style={[styles.successBox, { transform: [{ scale: successScale }] }]}>
          <Text style={styles.successIcon}>✓</Text>
          <Text style={[styles.successText, { color: theme.text }]}>Logged in!</Text>
          <Text style={[styles.successSub, { color: theme.subText }]}>Welcome back 👋</Text>
        </Animated.View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <Animated.View style={[styles.inner, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Image source={require("../../assets/images/McDonald.png")} style={styles.logo} />

        <Text style={[styles.title, { color: theme.text }]}>Welcome back</Text>
        <Text style={[styles.subtitle, { color: theme.subText }]}>
          Log in to your McDonald's account
        </Text>

        <Text style={[styles.label, { color: theme.text }]}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: theme.inputBg, color: theme.text, borderColor: theme.navBorder }]}
          placeholder="Enter your email"
          placeholderTextColor={theme.subText}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={[styles.label, { color: theme.text }]}>Password</Text>
        <TextInput
          style={[styles.input, { backgroundColor: theme.inputBg, color: theme.text, borderColor: theme.navBorder }]}
          placeholder="Enter your password"
          placeholderTextColor={theme.subText}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error !== "" && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={[styles.divider, { backgroundColor: theme.navBorder }]} />
          <Text style={[styles.dividerText, { color: theme.subText }]}>or</Text>
          <View style={[styles.divider, { backgroundColor: theme.navBorder }]} />
        </View>

        <TouchableOpacity style={[styles.createBtn, { borderColor: theme.border }]}>
          <Text style={[styles.createBtnText, { color: theme.text }]}>Create an Account</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { flex: 1, paddingHorizontal: 24, paddingTop: 32 },
  logo: { width: 60, height: 48, resizeMode: "contain", alignSelf: "center", marginBottom: 24 },
  title: { fontSize: 26, fontWeight: "800", marginBottom: 6 },
  subtitle: { fontSize: 15, marginBottom: 28 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 8 },
  input: { borderRadius: 12, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, marginBottom: 16 },
  error: { color: "#ef4444", fontSize: 13, marginBottom: 12 },
  loginBtn: { backgroundColor: "#FFC72C", paddingVertical: 15, borderRadius: 12, alignItems: "center", marginTop: 4, marginBottom: 20 },
  loginBtnText: { fontSize: 16, fontWeight: "800", color: "#000" },
  dividerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  divider: { flex: 1, height: 1 },
  dividerText: { marginHorizontal: 12, fontSize: 13 },
  createBtn: { borderWidth: 1, paddingVertical: 15, borderRadius: 12, alignItems: "center" },
  createBtnText: { fontSize: 16, fontWeight: "700" },
  successContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  successBox: { alignItems: "center" },
  successIcon: { fontSize: 64, color: "#FFC72C", marginBottom: 12 },
  successText: { fontSize: 28, fontWeight: "800", marginBottom: 6 },
  successSub: { fontSize: 16 },
});
