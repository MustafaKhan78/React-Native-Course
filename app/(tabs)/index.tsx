/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
const logoImg = require("../../assets/images/android-icon-background.png");

export default function index() {
  const [isModalVisible, setisModalVisible] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "crimson",
        flex: 1,
        padding: 60,
      }}
    >
      <Button
        title="Press"
        onPress={() => setisModalVisible(true)}
        color="tan"
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
        animationType="fade"
      >
        <View
          style={{
            backgroundColor: "tan",
            flex: 1,
            padding: 60,
          }}
        >
          <Text>Hello From modal</Text>
          <Button
            title="Close"
            color="midnigthblue"
            onPress={() => setisModalVisible(false)}
          />
        </View>
      </Modal>
      {/* <ScrollView>
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> Mustafa
        </Text>
        <Pressable onPress={() => console.log("Image Pressed")}>
          <Image source={logoImg} style={{ width: 100, height: 100 }}></Image>
        </Pressable>
        <Pressable onPress={() => console.log("Text Pressed")}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quasi, illum eos itaque quod, veniam aspernatur fugit esse ratione
            recusandae et ullam magnam nobis deserunt optio voluptate dolores
            delectus? Ut iusto exercitationem amet laboriosam quisquam eligendi
            nobis, debitis eaque iure totam cupiditate, vero omnis rerum
            dignissimos, soluta cum error! Maxime. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias quasi, illum eos itaque
            quod, veniam aspernatur fugit esse ratione recusandae et ullam
            magnam nobis deserunt optio voluptate dolores delectus? Ut iusto
            exercitationem amet laboriosam quisquam eligendi nobis, debitis
            eaque iure totam cupiditate, vero omnis rerum dignissimos, soluta
            cum error! Maxime.
          </Text>
        </Pressable>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 100, height: 100 }}
        ></Image>
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text>Hello again</Text>
        </ImageBackground>
      </ScrollView> */}
    </View>
  );
}
