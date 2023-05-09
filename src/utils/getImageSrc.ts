import {
	IconMap,
	ImageMap,
} from '../types/Interfaces';
import { ImageType } from '../types/ImageType';

import sunnyIcon from '../assets/weather-icons/sunny.png';
import cloudyIcon from '../assets/weather-icons/cloudy.png';
import rainyIcon from '../assets/weather-icons/rainy.png';
import foggyIcon from '../assets/weather-icons/foggy.png';
import snowyIcon from '../assets/weather-icons/snowy.png';
import sunnyImage from '../assets/weather-images/sunny.jpg';
import cloudyImage from '../assets/weather-images/cloudy.jpg';
import rainyImage from '../assets/weather-images/rainy.jpg';
import foggyImage from '../assets/weather-images/foggy.jpg';
import snowyImage from '../assets/weather-images/snowy.jpg';

const iconMap: IconMap = {
	sunny: sunnyIcon,
	cloudy: cloudyIcon,
	rainy: rainyIcon,
	foggy: foggyIcon,
	snowy: snowyIcon,
};

const imageMap: ImageMap = {
	cloudy: cloudyImage,
	rainy: rainyImage,
	foggy: foggyImage,
	snowy: snowyImage,
};

const defaultIcon = sunnyIcon;
const defaultImage = sunnyImage;

const getImageSrc = (
	weather: string,
	type: ImageType,
): string => {
	if (type === 'icon') {
		return iconMap[weather] || defaultIcon;
	} else {
		return imageMap[weather] || defaultImage;
	}
};

export default getImageSrc;
