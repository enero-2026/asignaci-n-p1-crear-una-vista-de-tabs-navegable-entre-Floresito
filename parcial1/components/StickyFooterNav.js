import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const screens = [
  {
    pathname: '/(tabs)/champurrado-1',
    title: 'Champurrado 1: Los orígenes',
    label: 'Champurrado 1: Los orígenes',
  },
  {
    pathname: '/(tabs)/champurrado-2',
    title: 'Champurrado 2: Recargado',
    label: 'Champurrado 2: Recargado',
  },
  {
    pathname: '/(tabs)/champurrado-3',
    title: 'Champurrado 3: Mas champurrado que nunca',
    label: 'Champurrado 3: Mas champurrado que nunca',
  },
];

export default function StickyFooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.footer}>
      {screens.map((screen) => {
        const isActive = pathname === screen.pathname;

        return (
          <Pressable
            key={screen.pathname}
            style={[styles.button, isActive && styles.buttonActive]}
            onPress={() =>
              router.replace({
                pathname: screen.pathname,
                params: { title: screen.title },
              })
            }
          >
            <Text style={[styles.buttonLabel, isActive && styles.buttonLabelActive]}>{screen.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 64,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: '#f2f2f2',
  },
  buttonLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  buttonLabelActive: {
    fontWeight: '700',
  },
});
