import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ProfileScreen() {
  const profileMenuItems = [
    { title: 'Kişisel Bilgiler', icon: '👤', color: 'bg-umay-surface/60' },
    { title: 'Sağlık Verilerim', icon: '❤️', color: 'bg-umay-surface/60' },
    { title: 'Bildirimler', icon: '🔔', color: 'bg-umay-surface/60' },
    { title: 'Gizlilik ve Güvenlik', icon: '🔒', color: 'bg-umay-surface/60' },
    { title: 'Yardım ve Destek', icon: '💬', color: 'bg-umay-surface/60' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-umay-white" edges={['top']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View className="items-center py-8 bg-umay-surface/30 rounded-b-[40px] mb-6 shadow-sm border-b border-umay-primary/5">
          <View className="w-28 h-28 rounded-full bg-umay-surface border-4 border-umay-white items-center justify-center mb-4 shadow-md overflow-hidden">
            <Image 
              source={require('../../assets/ios-light.png')} 
              className="w-20 h-20 opacity-80"
              resizeMode="contain" 
            />
          </View>
          <Text className="text-2xl font-extrabold text-umay-text mb-1">Ecem Doğa</Text>
          <Text className="text-sm font-medium text-umay-text/60 bg-umay-surface px-4 py-1.5 rounded-full text-center overflow-hidden">
            ecem@spailor.com
          </Text>
        </View>

        {/* Menu Items */}
        <View className="px-6 space-y-4 gap-y-3 mb-8">
          <Text className="text-lg font-bold text-umay-text mb-2 pl-2">Hesap Ayarları</Text>
          
          {profileMenuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              className="flex-row items-center bg-white p-4 rounded-2xl shadow-sm border border-umay-surface active:bg-umay-surface/20 transition-colors"
            >
              <View className={`w-12 h-12 rounded-xl items-center justify-center mr-4 ${item.color}`}>
                <Text className="text-xl">{item.icon}</Text>
              </View>
              <Text className="flex-1 text-base font-semibold text-umay-text">
                {item.title}
              </Text>
              <Text className="text-umay-text/30 text-xl font-bold">›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View className="px-6 mb-12">
          <TouchableOpacity 
            className="w-full flex-row justify-center items-center bg-umay-surface/50 border border-umay-primary/20 py-4 rounded-2xl active:bg-umay-surface transition-colors"
          >
            <Text className="text-umay-primary font-bold text-lg mr-2">Çıkış Yap</Text>
            <Text className="text-lg pb-1">🚪</Text>
          </TouchableOpacity>
          <Text className="text-center mt-6 text-xs text-umay-text/40 font-medium">Umaycare v1.0.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
