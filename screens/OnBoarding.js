import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: 'white', black: 'black'};

const slides = [
  {
    key: "one",
    title: "Step 1",
    text: "Set up Volcanoh outside your store and pair it with the app.",
    image: require("../assets/illustration1.png"),
  },
  {
    key: "two",
    title: "Step 2",
    text: "Select artworks for front & back screens through the app.",
    image: require("../assets/illustration2.png"),
  },
  {
    key: "three",
    title: "Step 3",
    text: "Publish and enjoy more walkins!",
    image: require("../assets/image9.png"),
  }
]

const Slide = ({item}) => {
    return (
      <View style={{alignItems: 'center', flex:1}}>
      <Image source={require('../assets/logo.png')} style={{
                  alignSelf: 'center',
                  width: 125,
                  height: 40,
                  top: '5%'
                }} />
        <Image
          source={item?.image}
          style={{height: '60%', width, resizeMode: 'cover', top: '10%'}}
        />
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.text}>{item?.text}</Text>
        </View>
      </View>
    );
  };
  
  const OnBoarding = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(contentOffsetX / width);
      setCurrentSlideIndex(currentIndex);
    };
  
    
  
    const Footer = () => {
      return (
        <View
          style={{
            height: height * 0.10,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          {/* Indicator container */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            {/* Render indicator */}
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex == index && {
                    backgroundColor: "rgba(181, 56, 62, 1)",
                    
                  },
                ]}
              />
            ))}
          </View>
  
          {/* Render buttons */}
          <View style={{marginBottom: 20}}>
            {currentSlideIndex == slides.length - 1 ? (
              <View style={{height: 20, left: '35%', bottom: '75%', backgroundColor: 'transparent'}}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.replace('Login')}>
                  <Text style={{fontWeight: '600', fontSize: 15}}>
                    Let's Start ->
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}></View>
            )}
          </View>
        </View>
      );
    };
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        <StatusBar  />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height * 0.90}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: "rgba(142, 142, 147, 0.9)",
      fontSize: 13,
      marginTop: 10,
      maxWidth: '70%',
      textAlign: 'center',
      lineHeight: 23,
      paddingHorizontal: 20,
      top: '105%',
    },
    title: {
      color: "rgba(16, 16, 16, 1)",
      fontSize: 19,
      fontWeight: "bold",
      top: '110%',
      textAlign: 'center',
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
    indicator: {
      height: 10,
      width: 10,
      backgroundColor: 'transparent',
      borderColor: "rgba(181, 56, 62, 1)",
      marginHorizontal: 5,
      borderRadius: 5,
      borderWidth: 2,
      
    },
    btn: {
      flex: 1,
      height: 50,
      borderRadius: 5,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  export default OnBoarding;