import React from 'react';

import { View, ImageBackground, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer fazer parte do nosso time?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
        <Text style={styles.description}>
          Logo essa funcionalidade estará disponível no nosso aplicativo. &#x1F49C;
        </Text>
      </ImageBackground>
      <RectButton
        onPress={handleNavigationBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Tudo bem!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
