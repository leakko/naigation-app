import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

export const SettingsScreen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>

      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Regresar al Home"
        onPress={() => navigator.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
