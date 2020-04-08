import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableHighlight, Image } from 'react-native'

export default class Conversation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'Tom',
          datetime: '13:49',
          message: 'hello?',
          avatar: require('../../assets/avatar.jpg'),
        },
        {
          name: 'Ben',
          datetime: '2/17/20',
          message: 'hey?',
          avatar: require('../../assets/avatar.jpg'),
        },
        {
          name: 'Tony',
          datetime: '9/26/19',
          message: 'good bye',
          avatar: require('../../assets/avatar.jpg'),
        },
      ],
    }
  }

  renderRow = ({ item, _index }) => (
    <View>
      <TouchableHighlight>
        <View style={[styles.row, styles.last]}>
          <Image style={styles.logo} source={item.avatar} />
          <View style={styles.content}>
            <View style={[styles.crow]}>
              <Text style={styles.title} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.time}> {item.datetime}</Text>
            </View>
            <View style={[styles.crow, { marginTop: 3 }]}>
              <Text style={styles.desc} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </View>
          {parseInt(item.unreadCount) > 0 ? <View style={styles.badge} /> : null}
        </View>
      </TouchableHighlight>
    </View>
  )

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={(item, index) => this._renderRow(item, index)}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    )
  }
}

const { width } = Dimensions.get('window')
const px = 9
const borderWidth = StyleSheet.hairlineWidth
const styles = StyleSheet.create({
  list: {
    borderTopWidth: borderWidth,
    borderTopColor: '#fafafa',
    borderBottomWidth: borderWidth,
    borderBottomColor: '#fafafa',
  },
  row: {
    paddingLeft: px,
    paddingVertical: px,
    borderBottomWidth: borderWidth,
    borderBottomColor: '#c9c9c9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 1,
    backgroundColor: '#fff',
  },
  last: {
    borderBottomWidth: 0,
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: px,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 45,
    marginRight: 3,
    flex: 1,
  },
  crow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,

    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    lineHeight: 19,
    overflow: 'hidden',
    color: '#333333',
  },
  time: {
    fontSize: 11,
    color: '#9d9d9e',
    paddingRight: 10,
  },
  desc: {
    fontSize: 13,
    color: '#9d9d9e',
    overflow: 'hidden',
  },
  rowBack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line: {
    height: borderWidth,
    width: width - 8,
    backgroundColor: '#c9c9c9',
    marginLeft: 8,
  },
  deleteBtn: {
    height: 67,
    width: 75,
    backgroundColor: '#d82617',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 26,
    height: 26,
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    left: 55,
    top: 7,
  },
})
