import React from 'react';

import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <MapView
        style={styles.map}
      />
    );
  }
}

const styles = {
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
};
