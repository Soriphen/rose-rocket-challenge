import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ApodScreen from "./screens/ApodScreen";

const Stack = createNativeStackNavigator();

export const ApodContext = React.createContext();

export default function App() {
  const [apods, setApods] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [enteredDate, setEnteredDate] = React.useState([]);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ApodContext.Provider value={apods}>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: { fontSize: 20, fontWeight: "700" },
            }}
          >
            <Stack.Screen
              name="Home"
              options={{
                title: "Picture of the day",
              }}
              children={(props) => (
                <HomeScreen
                  {...props}
                  apods={apods}
                  setApods={setApods}
                  error={error}
                  setError={setError}
                  enteredDate={enteredDate}
                  setEnteredDate={setEnteredDate}
                />
              )}
            />
            <Stack.Screen name="Apod" component={ApodScreen} />
          </Stack.Navigator>
        </ApodContext.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
