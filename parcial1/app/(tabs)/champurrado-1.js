import { useLocalSearchParams } from 'expo-router';
import ImageGalleryScreen from '../../components/ImageGalleryScreen';

const images = [
  require('../../assets/champurrado/1.jpeg'),
  require('../../assets/champurrado/2.jpeg'),
  require('../../assets/champurrado/3.jpeg'),
  require('../../assets/champurrado/4.jpeg'),
];

export default function ChampurradoOneScreen() {
  const { title } = useLocalSearchParams();

  return (
    <ImageGalleryScreen
      title={typeof title === 'string' ? title : 'Champurrado 1: Los orígenes'}
      images={images}
      screenKey="champurrado-1"
    />
  );
}
