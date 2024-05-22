import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import ItemDetailCard from "../components/ItemDetailCard";
import Accordion from "../components/Accordian";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
//import { FavoritesContext } from "../store/context/favourite-context";

function MealDetailsScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  //const isMealFavorite = favoriteMealCtx.ids.includes(mealId);
  const isMealFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteHandler() {
    if (isMealFavorite) {
      //favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? "heart" : "heart-outline"}
            color="black"
            onIconPress={changeFavoriteHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteHandler]);

  return (
    <ScrollView>
      <ItemDetailCard
        title={selectedMeals.title}
        imageURL={selectedMeals.imageUrl}
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        imageContainerStyle={styles.card}
        imageStyle={styles.cardImage}
        detailItemStyle={styles.textDetails}
      />
      <View style={styles.itemDetailsContainer}>
        <Accordion
          title="Ingredients"
          content={selectedMeals.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
          headerIconURL={require("../assets/vegetables.png")}
        />
        <Accordion
          title="Steps"
          content={selectedMeals.steps.map((step) => (
            <Text key={step}>{step}</Text>
          ))}
          headerIconURL={require("../assets/cooking.png")}
        />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
  },
  cardImage: {
    height: 350,
  },
  textDetails: {
    fontSize: 14,
  },
  itemDetailsContainer: {
    padding: 12,
  },
});
