// FeedScreen.jsx
import { View, Text, TextInput, FlatList, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon, Avatar, Card } from '@rneui/themed';
import React from 'react';

export default function FeedScreen() {
  const stories = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
  const posts = [
    { 
      id: '1', 
      user: 'Lorem Ipsum', 
      text: 'Publicación de prueba', 
      image: 'https://via.placeholder.com/100' 
    }
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Facebook</Text>
        <Icon name='search' type='font-awesome' size={24} color="gray" style={styles.icon} />
        <Icon name='comment' type='font-awesome' size={24} color="gray" />
      </View>
      <View style={styles.statusInput}>
        <Avatar size='medium' rounded source={{ uri: 'https://via.placeholder.com/100' }} />
        <TextInput placeholder="What's on your mind?" style={styles.input} />
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Icon name="video-camera" type="font-awesome" size={20} color="red" />
          <Text style={styles.buttonText}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="image" type="font-awesome" size={20} color="blue" />
          <Text style={styles.buttonText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="video-camera" type="font-awesome" size={20} color="green" />
          <Text style={styles.buttonText}>Room</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.circleStories}>
        {stories.map((_, index) => (
          <Avatar
            key={index}
            size={60}
            rounded
            source={{ uri: 'https://via.placeholder.com/60' }}
            containerStyle={styles.storyAvatar}
          />
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.stories}>
        {stories.map((_, index) => (
          <View key={index} style={styles.story} />
        ))}
      </ScrollView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <Card containerStyle={styles.postCard}>
            <View style={styles.postHeader}>
              <Avatar size={40} rounded source={{ uri: item.image }} />
              <View style={styles.postHeaderText}>
                <Text style={styles.postUser}>{item.user}</Text>
                <Text style={styles.postTime}>1h</Text>
              </View>
            </View>
            <Card.Divider />
            <Text>{item.text}</Text>
            <Image
              source={{ uri: 'https://placehold.co/600x400/png' }}
              style={styles.postImage}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center', 
    marginTop: 15, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' 
  },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#1877F2', marginRight: 'auto' },
  icon: { marginHorizontal: 10 },
  statusInput: { 
    flexDirection: 'row', 
    padding: 10, 
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderColor: '#cccccc' 
  },
  input: { 
    flex: 1, 
    marginLeft: 10, 
    borderWidth: 1, 
    borderRadius: 15, 
    borderColor: '#cccccc', 
    paddingHorizontal: 10, 
    paddingVertical: 5 
  },
  actionButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' 
  },
  button: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  buttonText: { 
    marginLeft: 5, 
    fontSize: 14, 
    color: '#333' 
  },
  circleStories: { 
    flexDirection: 'row', 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#cccccc' 
  },
  storyAvatar: { 
    marginRight: 10, 
    borderWidth: 2, 
    borderColor: '#1877F2' 
  },
  stories: { 
    flexDirection: 'row', 
    padding: 10,
    borderBottomWidth: 1, 
    borderColor: '#cccccc' 
  },
  story: { 
    width: 80, 
    height: 120, 
    backgroundColor: '#ccc', 
    marginRight: 10, 
    borderRadius: 10 
  },
  postCard: { 
    marginHorizontal: 0, 
    padding: 10, 
    borderRadius: 10
  },
  postHeader: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  postHeaderText: { 
    marginLeft: 10 
  },
  postUser: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  postTime: { 
    fontSize: 12, 
    color: 'gray' 
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10
  }
});
