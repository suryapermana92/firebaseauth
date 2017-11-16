// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
<View style={{...viewStyle, backgroundColor: props.backgroundColor }}>
<Text style={textStyle}>{props.headerText}</Text>
</View>
);
};

const styles = {
	viewStyle: {
	backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
	},
  textStyle: {
	fontSize: 20
  }
  };

// Make the component available to other parts of the app
export { Header };
