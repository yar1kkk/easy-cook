import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

type HomeScreenNavigationProp = {
  navigation: any;
};

export default function HomeScreen() {
  type categoryType = {
    name: string;
    icon: string;
  }

  const categories: categoryType[] = [
    { name: 'Breakfast', icon: 'https://via.placeholder.com/80' },
    { name: 'Salad', icon: 'https://via.placeholder.com/80' },
    { name: 'Dinner', icon: 'https://via.placeholder.com/80' },
    { name: 'Snack', icon: 'https://via.placeholder.com/80' },
    { name: 'Dessert', icon: 'https://via.placeholder.com/80' },
    { name: 'Vegan', icon: 'https://via.placeholder.com/80' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.subtitle}>Select a category</Text>
      {categories.map((category, index) => (
        <Link
          href={"/category-list"}
          key={index}
          style={styles.categoryButton}
        >
          <Image source={{ uri: category.icon }} style={styles.icon} />
          <Text style={styles.categoryText}>{category.name}</Text>
        </Link>
      ))}
    </View>
)}


    {/* <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      </ParallaxScrollView> */}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  categoryButton: {
    width: '100%',
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  categoryText: {
    fontSize: 18,
  },
});