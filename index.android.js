/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  View
} from 'react-native';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

/*
  * gridtype value between 1 to 6
 */
 var GridArray = this.props;
//  var GridArray = [
//   {
//     gridtype: 4
//   },{
//     gridlist: [
//         {
//           imageurl: require('./Assets/img.jpg'),
//           imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },
//          {
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//          },{
//            imageurl: require('./Assets/img.jpg'),
//            imagetext: 'img'
//           }
//         ]
//     }
// ];
if(GridArray){
  const gridType = GridArray[0].gridtype;
  const gridlist = GridArray[1].gridlist;
  const itemwidth = (windowsWidth-40)/gridType;
  const itemheight = (windowsWidth-40)/gridType;
  const basicspace = 10;
  function spacecalculate(){
    var calulatespace;
    if(gridType == 1)
      calulatespace = basicspace*2;
    else if(gridType == 2)
      calulatespace = basicspace+2;
    else if(gridType == 3)
      calulatespace = basicspace;
    else if(gridType == 4)
      calulatespace = basicspace-2;
    else if(gridType == 5)
      calulatespace = basicspace-4;
    else
      calulatespace = basicspace-4.5;
    return calulatespace;
  }
  const space =  spacecalculate();
}


export default class gradient extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{color: '#000000', textAlign: 'center',padding: space,fontWeight: 'bold'}}>Grid list</Text>
         <View style={{flexDirection: 'row',flexWrap: 'wrap',paddingBottom: space*3}}>
            {gridlist.map(function(item,index){
              return(
                <View style={((index == 0)||(index%gridType == 0))?{paddingLeft:space,padding: space,paddingBottom: 0}:{paddingLeft: 0,padding: space,paddingBottom: 0}}>
                  <Image style={{width: itemwidth, height: itemheight}} source={item.imageurl}>
                    <Text style={{position:'absolute',backgroundColor: 'rgba(0,0,0,0.5)',color: '#ffffff',height: itemwidth/2,textAlign: 'center',padding: itemwidth/10,paddingBottom:0,bottom:0,width: itemwidth}}>{item.imagetext}{index+1}</Text>
                  </Image>
                </View>
              );
            })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowsWidth,
    height: windowsHeight,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('gradient', () => gradient);
