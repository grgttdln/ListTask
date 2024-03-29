import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Keyboard, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Alert, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useState  } from 'react';
import Task from './components/Task'


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);  
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Today's Task Main Container */}
      <View style={styles.mainContent}>
        
        {/* Title */}
        <Text style={styles.title}>💡 Today's Task</Text>

        {/* Items Container */}
        <View style={styles.items}> 
          {
            taskItems.map((item, index) => {
              
              return ( 
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task Text={item} />
                </TouchableOpacity>
              )

            })
          }
        </View>
      </View>  


      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardWrapper}
      >
        <TextInput style={styles.input} placeholder={'Wite a text'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask() }>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
           
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFF",
    marginBottom: 20
  },
  
  mainContent: {
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40
  },

  title: {
    fontWeight: '700',
    fontSize: 24
  }, 

  items: {
    marginTop: 25,
  }, 

  keyboardWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#7161ef",
    borderWidth: 1,
    width: 300 ,
    borderRadius: 10
  },

  addWrapper: {
    width: 50,
    height: 50, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7161ef",
    justifyContent: "center",
    alignItems: "center"
  },

  addText: {

  },


});
