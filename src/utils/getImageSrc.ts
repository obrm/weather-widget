import {
	IconMap,
	ImageMap,
} from '../types/Interfaces';
import { ImageType } from '../types/ImageType';

import sunnyIcon from '../assets/weather-icons/Sunny.png';
import cloudyIcon from '../assets/weather-icons/Cloudy.png';
import rainyIcon from '../assets/weather-icons/Rainy.png';
import foggyIcon from '../assets/weather-icons/Foggy.png';
import snowyIcon from '../assets/weather-icons/Snowy.png';
import sunnyImage from '../assets/weather-images/Sunny.jpg';
import cloudyImage from '../assets/weather-images/Cloudy.jpg';
import rainyImage from '../assets/weather-images/Rainy.jpg';
import foggyImage from '../assets/weather-images/Foggy.jpg';
import snowyImage from '../assets/weather-images/Snowy.jpg';

const iconMap: IconMap = {
	Sunny: sunnyIcon,
	Cloudy: cloudyIcon,
	Rainy: rainyIcon,
	Foggy: foggyIcon,
	Snowy: snowyIcon,
};

const imageMap: ImageMap = {
	Sunny: sunnyImage,
	Cloudy: cloudyImage,
	Rainy: rainyImage,
	Foggy: foggyImage,
	Snowy: snowyImage,
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
