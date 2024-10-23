import { Modal, View, Text, Pressable, StyleSheet } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type Props = {
  isVisible: boolean
  children: React.ReactNode
  onClose: () => void
}

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <View style={style.modalContent}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Choose your emoji</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={22} color="#fff" />
          </Pressable>
        </View>
        {children}
      </View>
      <View style={style.modalContent}>{children}</View>
    </Modal>
  )
}

const style = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 16,
  },
  titleContainer: {
    alignItems: "center",
    height: "16%",
    justifyContent: "space-between",
    backgroundColor: "#464C55",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalContent: {
    backgroundColor: "#25292e",
    height: "25%",
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
  },
})
