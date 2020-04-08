import React from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import ChatItem from './ChatItem'
import PropTypes from 'prop-types'

const messages = [
  {
    id: '1',
    type: 'text',
    content: '你好哦',
    senderId: '1',
    senderName: 'Tom',
    receiverId: '2',
    receiverName: 'Sugar',
    renderTime: true,
    sendStatus: -1,
    time: '2020年3月30日 10:26',
  },
  {
    id: '2',
    type: 'text',
    content: '在吗？',
    senderId: '1',
    senderName: 'Tom',
    receiverId: '2',
    receiverName: 'Sugar',
    renderTime: false,
    sendStatus: 1,
    time: '2020年3月30日 10:26',
  },
  {
    id: '3',
    type: 'system',
    content: 'Tom 撤回了一条消息',
    senderId: '',
    senderName: '',
    receiverId: '',
    receiverName: '',
    renderTime: false,
    sendStatus: 1,
    time: '2020年3月30日 10:26',
  },
  {
    id: '4',
    type: 'text',
    content: 'hey?',
    senderId: '2',
    senderName: 'Sugar',
    receiverId: '1',
    receiverName: 'Tom',
    renderTime: false,
    sendStatus: 0,
    time: '2020年3月30日 10:26',
  },
]

const userProfile = {
  id: '1',
  nickName: 'Tom',
}

const chatProfile = {
  id: '2',
  nickName: 'Sugar',
}

const containerBackgroundColor = '#EDEDED'

export default class ChatView extends React.Component {
  renderItem = ({ item, index }) => {
    return (
      <ChatItem
        chatType="friend"
        message={item}
        userProfile={userProfile}
        chatProfile={chatProfile}
        showUserName={true}
      ></ChatItem>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} style={styles.touchableOpacity}>
          <FlatList
            data={messages}
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            enableEmptySections
            scrollEventThrottle={100}
            renderItem={(item, index) => this.renderItem(item, index)}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

ChatView.propTypes = {
  messages: PropTypes.array.isRequired,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: containerBackgroundColor,
    flex: 1,
    position: 'relative',
  },
  touchableOpacity: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})
