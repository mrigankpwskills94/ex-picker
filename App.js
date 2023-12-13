// Inside your App component or screen
import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import CustomPicker from "./components/CustomPicker";

const App = () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <SafeAreaView style={styles.container}>
            <CustomPicker options={options} onSelect={setSelectedOption} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default App;
