import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure FontAwesome is correctly imported

interface IconTextRowProps {
  title: string;
  body: string;
  commentsLength: number;
}

const PostItem: React.FC<IconTextRowProps> = ({ title, body, commentsLength }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body} numberOfLines={readMore ? undefined : 2}>
        {body}
      </Text>
      {body.length > 100 && (
        <TouchableOpacity onPress={() => setReadMore(!readMore)}>
          <Text style={styles.readMore}>{readMore ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
      )}
      {commentsLength > 0 && (
        <Text style={styles.comments}>
          {commentsLength} {commentsLength === 1 ? 'comment' : 'comments'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#666',
  },
  readMore: {
    color: '#007bff',
    marginTop: 8,
  },
  comments: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
  },
});

export default PostItem;
