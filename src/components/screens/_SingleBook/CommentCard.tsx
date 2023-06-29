import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {IComment} from '../../../screens/HomeScreen';
import ImageComponent from '../../common/Image/Image';
import {Comment, Dots, Heart} from '../../../assets/svg';
import Text from '../../common/Text/Text';
import RepliedCommentCard from './RepliedCommentCard';

const CommentCard = ({
  commentItem,
  showComments,
  setShowComments,
}: {
  commentItem: IComment;
  showComments: boolean;
  setShowComments: (showComments: boolean) => void;
}) => {
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
      <View style={styles.margin}>
        <Text style={styles.comment}>{commentItem.comment}</Text>
      </View>
      <View style={[styles.flexRow, styles.margin]}>
        <View style={[styles.flexRow, styles.marginRight]}>
          <Heart width={30} height={30} />
          <Text>{commentItem.likes}</Text>
        </View>
        <TouchableOpacity
          style={styles.flexRow}
          onPress={() => setShowComments(!showComments)}>
          <Comment width={30} height={30} />
          <Text>{commentItem.comments.length}</Text>
        </TouchableOpacity>
      </View>
      {commentItem.comments.length > 0 &&
        showComments &&
        commentItem?.comments.map(item => {
          return <RepliedCommentCard key={item.user} commentItem={item} />;
        })}
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
  margin: {
    marginLeft: 30,
    marginVertical: 10,
  },
  marginRight: {
    marginRight: 15,
  },
});

export default CommentCard;
