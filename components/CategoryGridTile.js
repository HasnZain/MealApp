import { View, Text, StyleSheet, Pressable, Platform, ImageBackground } from "react-native";

import GridTileTitle from "./GridTileTitle";

function CategoryGridTile({ title, color, onGridPress, imageURL }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.btnCategory,
          pressed ? styles.btnCategoryPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onGridPress}
      >
        <ImageBackground source={{ uri: imageURL }} style={styles.backgroundImage}>
          <View style={[styles.overlay, {backgroundColor: color}]} />
          <View style={styles.gridInnerContainer}>
            <GridTileTitle>{title}</GridTileTitle>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    // for IOS
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  btnCategory: {
    flex: 1,
  },
  btnCategoryPressed: {
    opacity: 0.5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  gridInnerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.35,
  },
});
