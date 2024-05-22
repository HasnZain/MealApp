import { View, Image, Text, StyleSheet } from "react-native";

function ItemDetailCard({title, imageURL, duration, complexity, affordability, imageContainerStyle, imageStyle, detailItemStyle}) {
  return (
    <View style={[styles.itemInnerContainer, imageContainerStyle]}>
      <View>
        <Image source={{ uri: imageURL }} style={[styles.image, imageStyle]} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.itemDtlsContainer}>
        <Text style={[styles.detailItem, detailItemStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem, detailItemStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, detailItemStyle]}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
}

export default ItemDetailCard;

const styles = StyleSheet.create({
    itemInnerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    itemDtlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12,
        fontFamily: 'open-sans'
    }
});