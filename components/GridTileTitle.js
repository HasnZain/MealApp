import { Text, StyleSheet } from "react-native";

function GridTileTitle({children}){
    return <Text style={styles.CategoryText}>{children}</Text>
}

export default GridTileTitle;

const styles = StyleSheet.create({
    CategoryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: '#fff'
    }
});