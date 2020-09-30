import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { MessageShape } from "../utils/MessageUtils";

const keyExtractor = (item) => item.id.toString();
export default class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };
  static defaultProps = {
    onPressMessage: () => {},
  };

  render() {
    return <Text style={styles.text}>12545646546654654</Text>;
  }
}
console.log("AAAAAAAAAAAAAA");
console.log(keyExtractor);

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "lightblue",
  },
});
