import React from 'react'
import { View, TouchableOpacity, Platform, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
const { width } = Dimensions.get('window')

const rightMessageBackground = '#A9EA7A'
const leftMessageBackground = '#fff'

export default class TextMessage extends React.Component {
  renderStatus(message) {
    switch (message.sendStatus) {
      case 1:
        return null
      case 0:
        return <ActivityIndicator></ActivityIndicator>
      case -1:
        return <Icon name="exclamation-circle" size={22} color="#F76162"></Icon>
    }
  }

  render() {
    const { isSelf, message } = this.props
    return (
      <View style={[isSelf ? styles.right : styles.left]} collapsable={false}>
        <View style={[styles.triangle, isSelf ? styles.rightTriangle : styles.leftTriangle]} />
        <TouchableOpacity activeOpacity={1}>
          <View style={[styles.container, isSelf ? styles.rightContainer : styles.leftContainer]}>
            <Text style={styles.content}>{message.content}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.statusContainer}>{this.renderStatus(message)}</View>
      </View>
    )
  }
}

TextMessage.propTypes = {
  isSelf: PropTypes.bool.isRequired,
  message: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    maxWidth: width - 160,
    minHeight: 20,
  },
  leftContainer: {
    backgroundColor: leftMessageBackground,
  },
  rightContainer: {
    backgroundColor: rightMessageBackground,
  },
  subEmojiStyle: {
    width: 25,
    height: 25,
  },
  triangle: {
    width: 0,
    height: 0,
    zIndex: 999,
    borderWidth: 5,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderColor: '#fff',
    marginTop: 13,
  },
  leftTriangle: {
    borderLeftWidth: 0,
    borderRightWidth: Platform.OS === 'android' ? 6 : 10,
    marginLeft: 5,
    borderColor: leftMessageBackground,
  },
  rightTriangle: {
    borderRightWidth: 0,
    borderLeftWidth: Platform.OS === 'android' ? 6 : 10,
    marginRight: 5,
    borderColor: rightMessageBackground,
  },
  right: {
    flexDirection: 'row-reverse',
  },
  left: {
    flexDirection: 'row',
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  content: {
    fontSize: 12,
  },
})
