import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import UserCard from '../../components/UserCard';
import { Comment, Post } from '../screens.dto';
import PostItem from '../../components/PostItem';

interface PostDetailProps {
  route: { params: { item: Post; comments: Comment[] } };
}

const PostDetailScreen: React.FC<PostDetailProps> = ({ route }) => {
  const { item, comments } = route.params;
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  const handleAddComment = () => {
    console.log('Adding comment:', inputText);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={{ flex: 1 }}>
        <UserCard iconName="user-circle-o" text={'User'} />
        <PostItem
          title={item.title}
          body={item.body}
          commentsLength={comments?.length || 0}
        />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {comments.map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
              <UserCard
                iconSize={20}
                textStyle={styles.usernameText}
                iconName="user-circle"
                text={comment.name}
              />
              <Text style={styles.commentText}>{comment.body}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleAddComment}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  commentContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3498db',
  },
  commentText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#444444',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
    height:100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  submitButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostDetailScreen;
