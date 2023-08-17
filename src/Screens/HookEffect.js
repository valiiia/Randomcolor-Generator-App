import React, { useEffect, useState } from 'react';
import { View, Text, FlatList ,StyleSheet, Image, ActivityIndicator} from 'react-native';


const HookEffect = () => {

    const [myUserData , setMyUserData] = useState();
    const[isLoaded, setIsLoaded] = useState(true);

const getUserData =  async ()=>{
    try {
     const response = await fetch("http://thapatechnical.github.io/userapi/users.json"); 
     const myData = await response.json();
     setMyUserData(myData);
     setIsLoaded(false);
     console.log(myData);

    } catch (error) {
        console.log(error);
    }
}

  useEffect(()=>{
    getUserData()
}, 
  []);

  return (
    <View style = {{alignContent:"center",justifyContent:"center" , width:"100%", display:"flex", paddingTop:50, backgroundColor: "#b696d7",}}>
      {isLoaded ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#000ff" />
        </View>
      ):(
        <View>
      <Text style={styles.mainHeader}>List of Students</Text>
       <FlatList
        data = {myUserData}
        renderItem ={({ item })=>{
            return(
             <View style={styles.card}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.imgStyle}
                  resizeMode = "cover"
                  source = {{uri: item.image}}
                />
              </View>
              <View>
                 <View style={styles.bioDataContainer}>
                    <Text style={styles.bioData}>Bio-Data</Text>
                    <Text style={styles.idNumber}>{item.id}</Text>
                 </View>
                  <View style ={styles.mainContain}>
                    <Text style={styles.myName}> Name: {item.name}</Text>
                    <Text style={styles.myName}> Email: {item.email}</Text>
                    <Text style={styles.myName}>Phone: {item.mobile}</Text>
                  </View>
                  </View>
            </View>
            );
        }}
       />
        </View>
      )
}
    </View>
  );
}

const styles = StyleSheet.create({

  loader: {
    minHeight:"100%",
    display:"flex",
    justifyContent:"center",
    alginItems:"center",
  },
 
    width :"100%",
    paddingTop:50,
    backgroundColor: "#b696d7",
    display:"flex",
    

  card:{
    width:250,
    backgroundColor:"#fff",
    borderRadius: 5,
    marginVertical: 20,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
  },
 
  bioDataContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alginItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#353535",
    paddingVertical:10,
    fontFamily:"JosefinSans_400Regular",
  },

  idNumber:{
    fontSize:20,
    color:"rgba(255,255,255,0.5)",
    fontFamily:"JosefinSans_400Regular",
  },
  bioData:{
    fontSize:30,
    color:"#fff",
    fontFamily:"JosefinSans_400Regular",
  },

  mainHeader:{
    fontSize:30,
    color:"#fff",
    fontFamily:"JosefinSans_400Regular",
  },

  imgContainer:{
    padding:10,
  },
  imgStyle:{
    width:"100%",
    height:180,
  },

});

export default HookEffect;
