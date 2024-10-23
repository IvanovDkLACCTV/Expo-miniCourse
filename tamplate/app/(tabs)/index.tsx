import { View, StyleSheet } from "react-native"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"

import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/Button"


const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {

  const [selectImage, setSelectImage] = useState<string | undefined>(
    undefined
  )
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.1,
    })
    if (!result.canceled) {
      setSelectImage(result.assets[0].uri)
      console.log(result)
    } else {
      alert("You did not select any image.")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectImage || PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          onPress={pickImageAsync}
          label="Choose a photo"
          theme="primary"
        />
        <Button label="Use this photo" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
})
