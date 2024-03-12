import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, TouchableOpacity } from 'react-native';

interface Comment {
  text: string;
  date: number;
}

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentChange = (text: string) => {
    setComment(text);
  };

  const handleCommentSubmit = () => {
    setComments(prevComments => [...prevComments, {text: comment, date: Date.now()}]);
    setComment('');
  };

  return (
    <View>
      <ScrollView>
        {comments.map((comment, index) => (
          <View key={index}>
            <Text>{comment.text}</Text>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor:'grey', marginLeft:5,marginRight:5}}>
                <Text>Thích</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => {}} 
                style={{backgroundColor:'grey',marginRight:5}} >
                <Text>Phản hồi</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TextInput
        value={comment}
        onChangeText={handleCommentChange}
        placeholder="Viết bình luận..."
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10 }}
      />
      <TouchableOpacity 
        onPress={() => {handleCommentSubmit()}}
        style={{backgroundColor:'grey',marginTop:10, width:30,height:30}} >
        <Text style={{textAlign:'center'}}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentBox;
