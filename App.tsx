import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, ImageSourcePropType } from "react-native";

interface FortuneProps {
  initialFortune?: string;
}

interface FortuneState {
  fortune: string;
  imageSource: ImageSourcePropType;
}

export default class App extends Component<FortuneProps, FortuneState> {
  private closedCookieImage = require("./assets/biscoito.png");
  private openCookieImage = require("./assets/biscoito-aberto.png");

  constructor(props: FortuneProps) {
    super(props);
    this.state = {
      fortune: props.initialFortune || "",
      imageSource: this.closedCookieImage,
    };
    this.discoveredFortunes = this.discoveredFortunes.bind(this);
  }

  discoveredFortunes(): void {
    const fortunes = [
      "You'll have your day better!",
      "You won't have your day worse!",
      "You'll have a great opportunity!",
      "You'll have a bad day!",
      "You'll have an opportunity for improvement!",
      "You'll have a bad day!",
    ];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    this.setState({
      imageSource: this.openCookieImage,
      fortune: fortunes[randomIndex],
    });
    setTimeout(() => {
      this.setState({ imageSource: this.closedCookieImage, fortune:"" });
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Fortune Cookie app.</Text>
        <Image style={styles.image} source={this.state.imageSource} />
        <Text style={styles.textNew}>{this.state.fortune}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.discoveredFortunes}
        >
          <View style={styles.buttonArea}>
            <Text style={styles.text}>Get your lucky!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  text: {
    color: "yellow",
    fontSize: 24,
    fontWeight: "bold",
  },
  textNew: {
    color: "yellow",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#E3f202",
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonArea: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});