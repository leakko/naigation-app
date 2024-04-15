import {
  type RouteProp,
  type NavigationProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {type RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const {id, name} = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {id} - {name}
      </Text>
    </View>
  );
};
