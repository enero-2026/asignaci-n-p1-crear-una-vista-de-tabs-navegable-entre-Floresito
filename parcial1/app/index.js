import { Redirect } from 'expo-router';

export default function Index() {
  return (
    <Redirect
      href={{
        pathname: '/(tabs)/champurrado-1',
        params: { title: 'Champurrado 1: Los orígenes' },
      }}
    />
  );
}
