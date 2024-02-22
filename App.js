import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import ItemDetail from './src/screens/ItemDetail';
import SearchResults from './src/screens/SearchResults';
import LoadingScreen from './src/components/LoadingScreen';
import Header from './src/components/Header';
import COLORS from './global/colors';
import { useFonts } from 'expo-font';
import { FONTS } from './global/fonts';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontFamily: 'Lobster' },
          header: () => <Header navigation={navigation} />, 
        })}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'MercadoYapu' }} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ title: 'Detalle del Producto' }} />
        <Stack.Screen name="SearchResults" component={SearchResults} options={{ title: 'Resultados de Búsqueda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
