import {useRef, useState} from 'react';
import {useStore} from '../../store/store';
import {ProductType} from '../../data/type';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {FlatList, ScrollView} from 'react-native';

export interface HomeScreenProps {
  navigation: any;
}

const getCoffeeList = (category: string, data: ProductType[]) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
};

const useHomeScreen = (props: HomeScreenProps) => {
  const coffeeList = useStore(state => state.coffeeList);
  const beanList = useStore(state => state.beanList);
  const categoriesFromData = Array.from(
    new Set(coffeeList.map(obj => obj.name)),
  );
  const categoriesList = ['All', ...categoriesFromData];
  const [categories, setCategories] = useState(categoriesList);
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState<ProductType[]>(
    getCoffeeList(categoryIndex.category, coffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();
  const listRef: any = useRef<FlatList>();
  const categoriesRef: any = useRef<ScrollView>();

  const handleScrollListToStart = () => {
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  const handleSearchCoffee = (searchText: string) => {
    if (searchText === '') {
      setSortedCoffee([...getCoffeeList(categoryIndex.category, coffeeList)]);
    } else {
      categoriesRef?.current?.scrollTo({
        options: {x: 0},
      });
      listRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({index: 0, category: categories[0]});
      setSortedCoffee([
        ...coffeeList.filter((item: any) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()),
        ),
      ]);
    }
  };

  const handleClearSearch = () => {
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({index: 0, category: categories[0]});
    setSortedCoffee([...coffeeList]);
    setSearchText('');
  };

  return {
    ...props,
    searchText,
    setSearchText,
    categories,
    categoryIndex,
    setCategoryIndex,
    sortedCoffee,
    setSortedCoffee,
    getCoffeeList,
    coffeeList,
    tabBarHeight,
    beanList,
    listRef,
    handleScrollListToStart,
    handleClearSearch,
    handleSearchCoffee,
    categoriesRef,
  };
};

export default useHomeScreen;
