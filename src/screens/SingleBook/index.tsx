import {RouteProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RootStackParamList} from '../../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ImageComponent from '../../components/common/Image/Image';
import {windowHeight} from '../../utils/dimension';
import Divider from '../../components/common/Divider';
import CommentCard from '../../components/screens/_SingleBook/CommentCard';
import ButtonComponent from '../../components/common/Button';
import TextInputComponent from '../../components/common/TextInput';
import {Img} from '../../assets/svg';

type TargetScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SingleBook'
>;

type TargetScreenRouteProp = RouteProp<RootStackParamList, 'SingleBook'>;

type Props = {
  navigation: TargetScreenNavigationProp;
  route: TargetScreenRouteProp;
};

const SingleBook = (props: Props) => {
  const [comment, setComment] = useState<string>('');
  const [showComments, setShowComments] = useState<boolean>(false);
  const {description, comments, cost, title, percentage, imageUrl} =
    props.route.params.item;
  return (
    <>
      <ScrollView>
        <ImageComponent source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <View style={styles.flexAndJustifyContent}>
            <Text style={styles.textStyle}>{percentage}%</Text>
            <Text style={styles.costStyle}>{cost}</Text>
          </View>
        </View>
        <Divider />
        {comments?.map(item => {
          return (
            <CommentCard
              showComments={showComments}
              setShowComments={setShowComments}
              commentItem={item}
            />
          );
        })}
      </ScrollView>
      {showComments && (
        <View style={styles.commentContainer}>
          <Img width={30} height={30} />
          <TextInputComponent
            placeholder="Your comment"
            value={comment}
            onChangeText={(value: string) => setComment(value)}
            style={styles.textInputStyle}
          />
          <ButtonComponent
            title="Send"
            onPress={() => console.log('comment')}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: windowHeight / 2,
  },
  flexAndJustifyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  costStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  infoWrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
  },
  commentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 14,
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  textInputStyle: {
    paddingHorizontal: 20,
    width: '80%',
  },
});

export default SingleBook;
