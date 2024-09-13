import { Stack } from "expo-router";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
