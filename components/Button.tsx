import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function Button(props: any) {
  const {
    marginVertical,
    width,
    backgroundColor,
    alignItems,
    justifyContent,
    height,
    borderRadius,
    fontSize,
    color,
    fontWeight,
    flexDirection,
    isImage,
    imgheight,
  } = props;
  const styles = StyleSheet.create({
    button: {
      marginVertical: marginVertical === null ? '' : marginVertical,
      width: width === null ? '' : width,
      backgroundColor: backgroundColor === null ? '' : backgroundColor,
      alignItems: alignItems === null ? '' : alignItems,
      justifyContent: justifyContent === null ? '' : justifyContent,
      height: height === null ? '' : height,
      borderRadius: borderRadius === null ? '' : borderRadius,
      flexDirection: flexDirection === null ? '' : flexDirection,
    },
    buttonText: {
      fontSize: fontSize,
      color: color,
      fontWeight: fontWeight,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {isImage == 'fb' && (
        <>
          <Image
            style={{height: imgheight === null ? '' : imgheight}}
            source={require('../assets/fbIcon.png')}
          />
        </>
      )}
      {isImage == 'google' && (
        <>
          <Image
            style={{height: imgheight === null ? '' : imgheight}}
            source={require('../assets/googleIcon.png')}
          />
        </>
      )}
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
