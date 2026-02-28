import { useLocalSearchParams } from 'expo-router';
import ImageGalleryScreen from '../../components/ImageGalleryScreen';

const images = [
  require('../../assets/champurrado/5.jpeg'),
  require('../../assets/champurrado/6.jpeg'),
  require('../../assets/champurrado/7.jpeg'),
  require('../../assets/champurrado/8.jpeg'),
];

export default function ChampurradoTwoScreen() {
  const { title } = useLocalSearchParams();

  return (
    <ImageGalleryScreen
      title={typeof title === 'string' ? title : 'Champurrado 2: Recargado'}
      images={images}
      screenKey="champurrado-2"
    />
  );
}
