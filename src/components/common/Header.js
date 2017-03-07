import React, { PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default function Header({ headerText }) {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
}

Header.propTypes = {
  headerText: PropTypes.string,
};

Header.defaultProps = {
  headerText: 'Header PlaceHolder',
};
