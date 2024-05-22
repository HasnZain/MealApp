import { FlatList, View, Text } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoryScreen({navigation}) {
  function renderCategoryGrid(itemData) {
    function PressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId : itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onGridPress={PressHandler}
        imageURL={itemData.item.image}
      />
    );
  }

  return (
    <View style={{backgroundColor: 'red'}}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryGrid}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
