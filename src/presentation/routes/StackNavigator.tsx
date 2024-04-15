import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  ProductScreen,
  ProductsScreen,
  SettingsScreen,
} from '../screens';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
