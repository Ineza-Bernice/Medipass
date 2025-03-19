import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Image as RImage
} from "react-native";
import { Svg, Path, Rect, Circle, Defs, Image, Pattern, Use, G, ClipPath } from "react-native-svg";

const languages = [
  { id: "1", name: "English" },
  { id: "2", name: "French" },
  { id: "3", name: "Spanish" },
  { id: "4", name: "German" },
  { id: "5", name: "Kinyarwanda" },
];

export const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Custom Select Input Button */}
      <TouchableOpacity style={styles.selectButton} onPress={toggleModal}>
        <Text style={styles.selectedText}>
          {selectedLanguage || "Select Language"}
        </Text>
        <Svg width="17" height="11" viewBox="0 0 17 11" fill="none">
<Path d="M16.6258 0.610735C16.3861 0.368765 16.0611 0.232833 15.7222 0.232833C15.3833 0.232833 15.0583 0.368765 14.8186 0.610735L8.49228 6.99974L2.16593 0.610735C1.92488 0.375622 1.60205 0.245526 1.26694 0.248467C0.931845 0.251407 0.611292 0.38715 0.37433 0.626457C0.137371 0.865765 0.00296009 1.18949 4.75645e-05 1.52791C-0.00286305 1.86633 0.125957 2.19237 0.358765 2.4358L7.5887 9.73733C7.82837 9.9793 8.15339 10.1152 8.49228 10.1152C8.83118 10.1152 9.1562 9.9793 9.39587 9.73733L16.6258 2.4358C16.8654 2.19375 17 1.86551 17 1.52327C17 1.18102 16.8654 0.852778 16.6258 0.610735Z" fill="#09363B" fill-opacity="0.4"/>
</Svg>

      </TouchableOpacity>

      {/* Modal to display languages */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageItem}
                onPress={() => handleLanguageSelect(item.name)}
              >
                <Text style={styles.languageText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#09363B",
    height: 58,
    width: '100%'
  },
  selectedText: {
    fontSize: 18,
    marginRight: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    top: "20%",
    left: "10%",
    right: "10%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxHeight: 300,
  },
  languageItem: {
    paddingVertical: 10,
  },
  languageText: {
    fontSize: 18,
    color: "#333",
  },
});

export default LanguageSelector;
