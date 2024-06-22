import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import {Comment, Post, User} from '../screens.dto';
import PostItem from '../../components/PostItem';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get(
          'https://gorest.co.in/public/v2/posts',
        );

        const commentsResponse = await axios.get(
          'https://gorest.co.in/public/v2/comments',
        );
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  const navigateToPostDetails = (item: Post, comments: Comment[]) => {
    navigation.navigate('PostDetailScreen', {item, comments});
  };

  const renderPostItem = ({item}: {item: Post}) => {
    const postComment = comments.filter(comment => comment.post_id === item.id);
    return (
      <TouchableOpacity
        onPress={() => navigateToPostDetails(item, postComment)}>
        <UserCard iconName="user-circle-o" text={'User'} />
        <PostItem
          title={item.title}
          body={item.body}
          commentsLength={postComment.length}
        />
        <Text style={styles.commentLink}>Comment</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  commentLink: {
    textAlign: 'right',
    paddingHorizontal: 10,
    marginBottom:10
  },
});

export default HomeScreen;
