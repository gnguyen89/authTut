import React, { PropTypes } from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default function CardSection({ children }) {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
}

CardSection.propTypes = {
  children: PropTypes.node,
};

CardSection.defaultProps = {
  children: [],
};
