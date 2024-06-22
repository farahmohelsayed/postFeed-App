import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconTextRowProps {
  iconName: string;
  text: string;
  iconSize?: number;
  textStyle?: object;
  containerStyle?: object;
}

const UserCard: React.FC<IconTextRowProps> = ({
  iconName,
  text,
  iconSize = 35,
  textStyle = {},
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name={iconName} size={iconSize} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: '800',
  },
});

export default UserCard;
