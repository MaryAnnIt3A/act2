import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.search1}>News Feeds</Text>
        <Image source={require('./assets/text.jpg')} style={styles.image} />
        <Text style={styles.caption}>  Happy Monday!!!</Text>
          <View style={styles.imagesContainer}>
        <Image source={require('./assets/image2.jpg')} style={styles.images} />
        </View>
        
        <Image source={require('./assets/image.jpg')} style={styles.image} />
        <Text style={styles.caption}>  Loving the view...</Text>

        <View style={styles.image1Container}>
          <Image source={require('./assets/sunset.jpg')} style={styles.image1}/>
        </View>

        <View style={styles.home}></View>
        <Image source={require('./assets/home.png')} style={styles.home} />


        <View style={styles.row}></View>
       
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,

  },
  search: {
    height: 40,
    width: 320,
    backgroundColor: "#FFFFFF",
    marginTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 5,
    flexDirection: "column",

  },
  search1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
 
  image: {
    height: 70,
    width: 70,
    borderRadius:50,  
    marginTop: 20,
  },
  image1: {
    marginTop: 10,
    flexDirection: "row",
    height: 180,
    width: 300,
    borderRadius: 15,
  },
  images: {
    marginTop: 10,
    flexDirection: "row",
    height: 180,
    width: 300,
    borderRadius: 15,
  },
  home: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginBottom: 0,
    alignSelf: "center"
  },
  caption: {
    marginTop: 3,
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15
  }
});

