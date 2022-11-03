import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => {
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <Text>List</Text>
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
