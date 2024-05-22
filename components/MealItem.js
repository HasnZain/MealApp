import { View, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation} from '@react-navigation/native'
import ItemDetailCard from "./ItemDetailCard";

function MealItem ({id, title, imageURL, duration, complexity, affordability}) {

    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetails', {
            mealId: id
        });
    }

    return (
      <View style={styles.itemOuterContainer}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={selectMealItemHandler}
        >
          <ItemDetailCard
            title={title}
            imageURL={imageURL}
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </Pressable>
      </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    itemOuterContainer: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        // for IOS
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
});