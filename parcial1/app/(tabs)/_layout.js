import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="champurrado-1"
        options={{
          title: 'Champurrado 1: Los orígenes',
        }}
      />
      <Stack.Screen
        name="champurrado-2"
        options={{
          title: 'Champurrado 2: Recargado',
        }}
      />
      <Stack.Screen
        name="champurrado-3"
        options={{
          title: 'Champurrado 3: Mas champurrado que nunca',
        }}
      />
    </Stack>
  );
}
