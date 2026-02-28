import { useLocalSearchParams } from 'expo-router';
import ImageGalleryScreen from '../../components/ImageGalleryScreen';

const images = [
  require('../../assets/champurrado/9.jpeg'),
  require('../../assets/champurrado/10.jpeg'),
  require('../../assets/champurrado/11.jpeg'),
  require('../../assets/champurrado/12.jpeg'),
];

export default function ChampurradoThreeScreen() {
  const { title } = useLocalSearchParams();

  return (
    <ImageGalleryScreen
      title={typeof title === 'string' ? title : 'Champurrado 3: Mas champurrado que nunca'}
      images={images}
      screenKey="champurrado-3"
    />
  );
}
