import React, { useState, useRef } from 'react'
import { Animated, View } from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import {
  Button,
  DetailTitle,
  OverlayDetail,
  Header,
  Title,
  Pin
} from './styles'

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZGVwcm9ncmFtIiwiYSI6ImNqMmJiZnVsbzAwdjYzM284NWhwMWlmZmcifQ.1zrQ2Kozur-dRTtSOKjyvA'
)

const App = () => {
  const [ detailVisible, setDetailVisible ] = useState(false)
  const scale = useRef(new Animated.Value(0)).current

  const onMarkerPress = () => {
    setDetailVisible(!detailVisible)

    Animated.timing(scale, {
      toValue: !detailVisible ? 1 : 0,
      duration: 300,
      useNativeDrive: true
    }).start()
  }

  console.log(detailVisible)

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Title>ReactClub : RNative & MapBox</Title>
      </Header>

      <MapboxGL.MapView
        centerCoordinate={[ 153.046336, -27.454347 ]}
        style={{ flex: 1 }}
        zoomLevel={10}
        styleURL={'mapbox://styles/deprogram/cjno44eaf0xb42rpdmw1y2co6'}>
        <MapboxGL.PointAnnotation
          coordinate={[ 153.046336, -27.454347 ]}
          id='pointer1'>
          <Button onPress={onMarkerPress}>
            <Pin source={require('./assets/pin.png')} />
          </Button>
        </MapboxGL.PointAnnotation>
      </MapboxGL.MapView>

      <Animated.View style={[ { transform: [ { scale } ] } ]}>
        <OverlayDetail onPress={onMarkerPress}>
          <DetailTitle>Detail of Marker</DetailTitle>
        </OverlayDetail>
      </Animated.View>
    </View>
  )
}

export default App
