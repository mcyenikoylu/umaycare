import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  // TODO: Replace with actual auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Ecem');
  const navigation = useNavigation<any>();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Günaydın';
    if (hour < 18) return 'İyi Günler';
    return 'İyi Akşamlar';
  };

  return (
    <SafeAreaView className="flex-1 bg-umay-white" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        {/* Left: Logo or User Greeting */}
        <View className="flex-row items-center">
          {isLoggedIn ? (
            <View>
              <Text className="text-sm text-umay-text/60">{getGreeting()}</Text>
              <Text className="text-xl font-bold text-umay-text">{userName} 👋</Text>
            </View>
          ) : (
            <View className="flex-row items-center">
              <Image
                source={require('../../assets/ios-light.png')}
                className="w-10 h-10 mr-2"
                resizeMode="contain"
              />
              <Text className="text-xl font-bold text-umay-primary">Umaycare</Text>
            </View>
          )}
        </View>

        {/* Right: Login Button */}
        {!isLoggedIn && (
          <TouchableOpacity
            className="bg-umay-primary px-5 py-2.5 rounded-full"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-umay-white font-semibold">Giriş Yap</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <View className="bg-umay-blush/50 rounded-3xl p-6 mb-6">
          <Text className="text-2xl font-bold text-umay-text mb-2">
            Hoş Geldiniz! ✨
          </Text>
          <Text className="text-base text-umay-text/70 leading-6">
            Kadın sağlığı alanında güvenilir ve detaylı çözümler elinizin altında.
          </Text>
        </View>

        {/* Quick Actions */}
        <Text className="text-lg font-bold text-umay-text mb-4">Hızlı Erişim</Text>
        <View className="flex-row flex-wrap gap-3 mb-6">
          <TouchableOpacity className="bg-umay-secondary/30 rounded-2xl p-4 w-[48%]">
            <Text className="text-2xl mb-2">📅</Text>
            <Text className="text-base font-semibold text-umay-text">Takvim</Text>
            <Text className="text-sm text-umay-text/60">Döngü takibi</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-umay-accent/20 rounded-2xl p-4 w-[48%]">
            <Text className="text-2xl mb-2">💊</Text>
            <Text className="text-base font-semibold text-umay-text">İlaçlar</Text>
            <Text className="text-sm text-umay-text/60">Hatırlatıcılar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-umay-blush/50 rounded-2xl p-4 w-[48%]">
            <Text className="text-2xl mb-2">📊</Text>
            <Text className="text-base font-semibold text-umay-text">İstatistikler</Text>
            <Text className="text-sm text-umay-text/60">Sağlık verileri</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-umay-surface rounded-2xl p-4 w-[48%]">
            <Text className="text-2xl mb-2">💬</Text>
            <Text className="text-base font-semibold text-umay-text">Destek</Text>
            <Text className="text-sm text-umay-text/60">Yardım al</Text>
          </TouchableOpacity>
        </View>

        {/* Info Card */}
        <View className="bg-umay-surface rounded-3xl p-5 mb-10">
          <Text className="text-base font-semibold text-umay-text mb-1">💡 Bilgi</Text>
          <Text className="text-sm text-umay-text/70 leading-5">
            Tüm özelliklere erişmek için hesabınıza giriş yapın veya yeni bir hesap oluşturun.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
