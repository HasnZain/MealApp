//import { useContext } from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
//import { FavoritesContext } from "../store/context/favourite-context";
import { useSelector } from "react-redux";
import { View } from "react-native";

function FavouriteScreen() {
  //const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    //favoriteMealCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  return <View style={{flex: 1, backgroundColor: 'red'}}><MealList items={favoriteMeals} /></View>;
}

export default FavouriteScreen;
