import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BotonSeccion1Hero1(props) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Mangas")}>
      <LinearGradient
        colors={['#d71b7b', '#d71b7b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.texto}>{props.text || props.children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
