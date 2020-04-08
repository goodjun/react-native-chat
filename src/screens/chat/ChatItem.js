import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import TextMessage from './TextMessage'
import PropTypes from 'prop-types'

export default class ChatItem extends React.Component {
  renderContent(isSelf) {
    const { message } = this.props
    switch (message.type) {
      case 'text':
        return this.renderTextMessage(isSelf, message)
      case 'image':
        return this.renderTextMessage(isSelf, message)
      case 'voice':
        return this.renderTextMessage(isSelf, message)
      case 'system':
        return this.renderSystemMessage(message)
    }
  }

  renderTextMessage(isSelf, message) {
    return <TextMessage isSelf={isSelf} message={message}></TextMessage>
  }

  renderSystemMessage(message) {
    return (
      <View style={styles.systemContainer}>
        <Text style={styles.systemText}>{message.content}</Text>
      </View>
    )
  }

  renderMessageTime(time) {
    return (
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    )
  }

  render() {
    const { message, userProfile, showUserName } = this.props
    const type = message.type
    const isSelf = userProfile.id === message.senderId
    const showName = showUserName && !isSelf && type !== 'system' ? message.senderName : null
    return (
      <View>
        <View>
          {type === 'system' ? null : (
            <TouchableOpacity activeOpacity={1}>
              {message.renderTime ? this.renderMessageTime(message.time) : null}
            </TouchableOpacity>
          )}
          <TouchableOpacity activeOpacity={1} style={[styles.chat, isSelf ? styles.right : styles.left]}>
            {type === 'system' ? null : (
              <TouchableOpacity activeOpacity={1}>
                <Image style={styles.avatar} source={require('../../assets/avatar.jpg')} />
              </TouchableOpacity>
            )}
            <View style={[{ justifyContent: 'center' }, type === 'system' && { flex: 1 }]}>
              {showName ? <Text style={[styles.userName]}>{showName}</Text> : null}
              {this.renderContent(isSelf)}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ChatItem.propTypes = {
  message: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired,
  chatProfile: PropTypes.object.isRequired,
  chatType: PropTypes.oneOf(['friend', 'group']),
  showUserName: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  chat: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  right: {
    flexDirection: 'row-reverse',
  },
  left: {
    flexDirection: 'row',
  },
  systemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  systemText: {
    fontSize: 12,
    color: '#A7A7A7',
  },
  userName: {
    fontSize: 10,
    color: '#737373',
    marginBottom: 2,
    marginLeft: 12,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  timeText: {
    color: '#A6A6A6',
    fontSize: 12,
  },
})
