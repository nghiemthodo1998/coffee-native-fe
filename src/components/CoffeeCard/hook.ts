import {Dimensions, ImageProps} from 'react-native';

export interface CoffeeCardProps {
  id: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  name: string;
  special_ingredient: string;
  average_rating: number;
  price: any;
  buttonPressHandler: any;
}

export const COFFEE_CARD_WIDTH = Dimensions.get('window').width * 0.32;

const useCoffeeCard = (props: CoffeeCardProps) => {
  return {
    ...props,
  };
};

export default useCoffeeCard;
