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

const getImageSrc = (
	weather: string,
	type: ImageType,
): string => {
	if (type === 'icon') {
		switch (weather) {
			case 'sunny':
				return sunnyIcon;
			case 'cloudy':
				return cloudyIcon;
			case 'rainy':
				return rainyIcon;
			case 'foggy':
				return foggyIcon;
			case 'snowy':
				return snowyIcon;
			default:
				console.error(
					`Unknown weather type: ${weather}`,
				);
				return sunnyIcon;
		}
	} else {
		switch (weather) {
			case 'cloudy':
				return cloudyImage;
			case 'rainy':
				return rainyImage;
			case 'foggy':
				return foggyImage;
			case 'snowy':
				return snowyImage;
			default:
				console.error(
					`Unknown weather type: ${weather}`,
				);
				return sunnyImage;
		}
	}
};

export default getImageSrc;
