import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import StickyFooterNav from './StickyFooterNav';

export default function ImageGalleryScreen({ title, images, screenKey }) {
  const safeImages = images ?? [];

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
        <Text style={styles.screenTitle}>{title}</Text>
        {safeImages.map((source, index) => (
          <Image
            key={`${screenKey}-img-${index}`}
            source={source}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <StickyFooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  image: {
    width: '42%',
    height: 720,
    borderRadius: 12,
    marginBottom: 14,
  },
});
