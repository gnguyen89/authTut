import React, { PropTypes } from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default function Card({ children }) {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {
  children: [],
};
