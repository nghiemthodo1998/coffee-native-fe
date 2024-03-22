import {create} from 'zustand';
import {persist, createJSONStorage, devtools} from 'zustand/middleware';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartType, PriceProductType, ProductType} from '../data/type';
import {produce} from 'immer';

export interface UseStore {
  coffeeList: ProductType[];
  beanList: ProductType[];
  cartPrice: number;
  favoriteList: any[];
  cartList: CartType[];
  orderHistoryList: any[];
}

export const useStore = create<UseStore>()(
  devtools(
    persist(
      set => ({
        coffeeList: CoffeeData,
        beanList: BeansData,
        cartPrice: 0,
        favoriteList: [],
        cartList: [],
        orderHistoryList: [],
        addToCart: (cartItem: {id: string; prices: PriceProductType}) =>
          set(produce((state: UseStore) => {})),

        calculateCartPrice: () => set(produce((state: UseStore) => {})),

        addToFavoriteList: (type: string, id: string) =>
          set(produce(state => {})),

        deleteFromFavoriteList: (type: string, id: string) =>
          set(produce(state => {})),

        incrementCartItemQuantity: (id: string, size: string) =>
          set(produce(state => {})),

        decrementCartItemQuantity: (id: string, size: string) =>
          set(produce(state => {})),

        addToOrderHistoryListFromCart: () => set(produce(state => {})),
      }),
      {
        name: 'coffee-app',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
