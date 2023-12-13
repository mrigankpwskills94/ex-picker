import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";

const CustomPicker = ({ options, onSelect }) => {
    const scrollViewRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    const scrollToSelected = () => {
        const selectedIndex = options.indexOf(selectedOption);
        const scrollY = (selectedIndex - 1) * optionHeight;
        scrollViewRef.current.scrollTo({ y: scrollY, animated: true });
    };

    const optionHeight = 40; // Adjust as needed based on your design

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select an Option:</Text>
            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.optionsContainer}
                onMomentumScrollEnd={(event) => {
                    const offsetY = event.nativeEvent.contentOffset.y;
                    const newIndex = Math.round(offsetY / optionHeight);
                    handleSelectOption(options[newIndex]);
                }}>
                <View style={styles.optionsSpacer} />
                {options.map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.optionItem,
                            {
                                backgroundColor:
                                    item === selectedOption
                                        ? "#3498db"
                                        : "transparent",
                                borderRadius: "25%",
                            },
                        ]}
                        onPress={() => handleSelectOption(item)}>
                        <Text
                            style={[
                                styles.optionText,
                                { fontSize: item === selectedOption ? 20 : 14 }, // Adjust as needed
                                {
                                    color:
                                        item === selectedOption
                                            ? "white"
                                            : "black",
                                }, // Adjust text color
                            ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
                <View style={styles.optionsSpacer} />
            </ScrollView>
        </View>
    );
};
/* inside CustomPicker.js */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    optionsContainer: {
        paddingVertical: 5,
    },
    optionsSpacer: {
        height: "10%", // Adjust as needed based on your design
    },
    optionItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        alignSelf: "center",
    },
    optionText: {
        fontSize: 14,
    },
});
export default CustomPicker;
