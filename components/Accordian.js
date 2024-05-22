import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Accordion = ({ title, content, headerIconURL }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordianOuter}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={styles.accordianHeaderContainer}>
          <View style={styles.HeadingContainer}>
          {headerIconURL && <Image source={headerIconURL} style={styles.imageStyle} />}
            <Text>{title}</Text>
          </View>
          <Text>
            {expanded ? (
              <Ionicons name="remove" size={14} color="black" />
            ) : (
              <Ionicons name="add" size={14} color="black" />
            )}
          </Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.accordianContentContainer}>
          <View>{content}</View>
        </View>
      )}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  accordianOuter: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  accordianHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#ccc",
  },
  HeadingContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  imageStyle: {
    width: 20, 
    height: 20,
    marginRight: 10
  },
  accordianContentContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
});
