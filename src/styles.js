import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const Header = styled.View`
  height: 100px;
  width: 100%;
  background-color: #ff1844;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  padding-top: 35px;
  font-size: 20px;
  font-weight: 800;
  color: whitesmoke;
`
export const Pin = styled.Image`
  width: 42px;
  height: 53px;
`
export const Button = styled.TouchableOpacity`
  width: 42px;
  height: 53px;
`
export const OverlayDetail = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 32}px;
  height: 100px;
  border-radius: 20px;
  background-color: #ff1844;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  left: 16px;
  position: absolute;
`
export const DetailTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: whitesmoke;
`
