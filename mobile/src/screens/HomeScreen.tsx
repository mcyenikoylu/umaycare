import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-3xl font-bold text-primary-600 mb-4">
          UmayCare
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          Anne-Bebek Sağlık Uygulaması
        </Text>
        <Text className="text-base text-gray-500 text-center mt-2">
          Hoş geldiniz! Sağlıklı bir hamilelik ve bebek bakımı için yanınızdayız.
        </Text>
      </View>
    </SafeAreaView>
  );
}
