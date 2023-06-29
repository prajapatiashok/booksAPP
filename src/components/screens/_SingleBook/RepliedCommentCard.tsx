import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IRepliedComment} from '../../../screens/HomeScreen';
import ImageComponent from '../../common/Image/Image';
import {Dots, Heart} from '../../../assets/svg';
import Text from '../../common/Text/Text';

const RepliedCommentCard = ({commentItem}: {commentItem: IRepliedComment}) => {
  return (
    <View key={commentItem.comment} style={styles.container}>
      <View style={styles.flexRowAndJustifySpaceBetween}>
        <View style={styles.flexRow}>
          <ImageComponent
            source={{uri: commentItem.avatar}}
            style={styles.avatar}
          />
          <Text style={styles.user}>{commentItem.user}</Text>
        </View>
        <Dots />
      </View>
      <View style={{marginLeft: 30, marginVertical: 10}}>
        <Text style={styles.comment}>{commentItem.comment}</Text>
      </View>
      <View style={[styles.flexRow, {marginLeft: 30, marginVertical: 10}]}>
        <View style={[styles.flexRow, {marginRight: 15}]}>
          <Heart width={30} height={30} />
          <Text>{commentItem.likes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  comment: {
    fontSize: 16,
    fontWeight: '500',
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowAndJustifySpaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default RepliedCommentCard;
