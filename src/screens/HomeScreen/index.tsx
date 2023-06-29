import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import booksAPI from '../../api/booksAPI';
import Text from '../../components/common/Text/Text';
import ImageComponent from '../../components/common/Image/Image';
import {windowHeight, windowWidth} from '../../utils/dimension';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

export interface IRepliedComment {
  user: string;
  avatar: string;
  comment: string;
  likes: string;
}

export interface IComment {
  user: string;
  avatar: string;
  comment: string;
  likes: string;
  comments: IRepliedComment[];
}

export interface IBook {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  percentage: number;
  cost: number;
  comments: IComment[];
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}): JSX.Element => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastIndex]);

  const apiCall = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await booksAPI.get('books');
      setBooks([...books, ...response?.data]);
      setLastIndex(lastIndex + 2);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const renderItem = ({item}: {item: IBook}) => {
    const onPressCard = (): void => {
      navigation.navigate('SingleBook', {
        item,
      });
    };
    return (
      <TouchableOpacity
        onPress={onPressCard}
        style={{width: windowWidth / 1.98, height: windowHeight / 2.4}}>
        <ImageComponent source={{uri: item.imageUrl}} style={styles.image} />
        <View style={styles.infoWrapper}>
          <Text>{item.title}</Text>
          <View style={styles.flexAndJustifyContent}>
            <Text style={styles.textStyle}>{item.percentage}%</Text>
            <Text style={styles.costStyle}>{item.cost}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BOOKS</Text>
      <FlatList
        columnWrapperStyle={styles.justifyContent}
        data={books}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={apiCall}
        onEndReachedThreshold={0.4}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  image: {
    width: 205,
    height: 250,
    resizeMode: 'cover',
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
  infoWrapper: {
    paddingHorizontal: 14,
    marginTop: 8,
  },
  separatorMargin: {
    margin: 5,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  costStyle: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
