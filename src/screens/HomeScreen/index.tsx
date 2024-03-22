import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import useHomeScreen, {HomeScreenProps} from './hook';
import {COLORS, FONTSIZE} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import {CustomIcon} from '../../components/CustomIcon';
import CoffeeCard from '../../components/CoffeeCard';

const HomeScreen: FC<HomeScreenProps> = props => {
  const {
    searchText,
    setSearchText,
    categories,
    categoryIndex,
    setCategoryIndex,
    sortedCoffee,
    setSortedCoffee,
    coffeeList,
    tabBarHeight,
    beanList,
    listRef,
    handleScrollListToStart,
    handleClearSearch,
    handleSearchCoffee,
    getCoffeeList,
    categoriesRef,
    navigation,
  } = useHomeScreen(props);
  return (
    <View style={styles.homeScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <HeaderBar title="Home" />

        <Text style={styles.screenTitleStyle}>
          Find the best{'\n'}coffee for your
        </Text>

        <View style={styles.inputFindCoffeeContainer}>
          <TouchableOpacity onPress={() => handleSearchCoffee(searchText)}>
            <CustomIcon
              style={styles.inputIconStyle}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>

          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              handleSearchCoffee(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInputStyle}
          />
          {searchText.length ? (
            <TouchableOpacity onPress={handleClearSearch}>
              <CustomIcon
                name="close"
                style={styles.inputIconStyle}
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        <ScrollView
          ref={categoriesRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollCatetoryStyle}>
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryItemStyle}
                onPress={() => {
                  handleScrollListToStart();
                  setCategoryIndex(prev => ({
                    ...prev,
                    index: index,
                    category: categories[index],
                  }));
                  setSortedCoffee([
                    ...getCoffeeList(categories[index], coffeeList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.categoryLabelStyle,
                    categoryIndex.index === index
                      ? {color: COLORS.primaryOrangeHex}
                      : {},
                  ]}>
                  {category}
                </Text>
                {categoryIndex.index === index ? (
                  <View style={styles.activeCategoryLabelStyle}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <FlatList
          ref={listRef}
          ListEmptyComponent={
            <View style={styles.emptyCoffeeListContainer}>
              <Text style={styles.categoryLabelStyle}>No Coffee Available</Text>
            </View>
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatListCoffeeStyle}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Detail', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
        />

        <Text style={styles.coffeeBeanTextStyle}>Coffee Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={beanList}
          contentContainerStyle={[
            styles.flatListCoffeeStyle,
            {marginBottom: tabBarHeight},
          ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Detail', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  buttonPressHandler={() => {}}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
