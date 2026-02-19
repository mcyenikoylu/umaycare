import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-24 h-24 rounded-full bg-primary-100 items-center justify-center mb-4">
          <Text className="text-4xl">👤</Text>
        </View>
        <Text className="text-2xl font-bold text-gray-800 mb-2">
          Profilim
        </Text>
        <Text className="text-base text-gray-500 text-center">
          Hesap bilgilerinizi ve ayarlarınızı buradan yönetebilirsiniz.
        </Text>
      </View>
    </SafeAreaView>
  );
}
