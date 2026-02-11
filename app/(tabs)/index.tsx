import {
  View,
  Button,
  ScrollView,
  Text,
  Image,
  ImageBackground,
} from "react-native";
const logoImg = require("../../assets/images/android-icon-background.png");

export default function index() {
  return (
    <View
      style={{
        backgroundColor: "crimson",
        flex: 1,
        padding: 60,
      }}
    >
      {/* <ScrollView>
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> Mustafa
        </Text>
        <Image source={logoImg} style={{ width: 100, height: 100 }}></Image>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quasi, illum eos itaque quod, veniam aspernatur fugit esse ratione
          recusandae et ullam magnam nobis deserunt optio voluptate dolores
          delectus? Ut iusto exercitationem amet laboriosam quisquam eligendi
          nobis, debitis eaque iure totam cupiditate, vero omnis rerum
          dignissimos, soluta cum error! Maxime. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Molestias quasi, illum eos itaque quod,
          veniam aspernatur fugit esse ratione recusandae et ullam magnam nobis
          deserunt optio voluptate dolores delectus? Ut iusto exercitationem
          amet laboriosam quisquam eligendi nobis, debitis eaque iure totam
          cupiditate, vero omnis rerum dignissimos, soluta cum error! Maxime.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 100, height: 100 }}
        ></Image>
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Hello again</Text>
      </ImageBackground>
      </ScrollView> */}
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed")}
        color="tan"
      />
    </View>
  );
}
