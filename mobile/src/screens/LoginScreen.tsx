import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-umay-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1 px-8 pt-10" showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8">
            <Text className="text-umay-text font-bold text-lg">← Geri</Text>
          </TouchableOpacity>

          <Text className="text-4xl font-extrabold text-umay-text mb-2">
            Tekrar{'\n'}Merhaba! 👋
          </Text>
          <Text className="text-base text-umay-text/60 mb-10 leading-6">
            Hesabınıza giriş yaparak Umaycare servislerine ulaşın.
          </Text>

          <View className="space-y-6 gap-y-5">
            <View>
              <Text className="text-umay-text text-sm font-semibold mb-2 ml-1">E-posta Adresi</Text>
              <TextInput
                className="bg-umay-surface/40 border border-umay-primary/10 rounded-2xl px-5 py-4 text-umay-text text-base"
                placeholder="ornek@mail.com"
                placeholderTextColor="#A09E9D"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View>
              <Text className="text-umay-text text-sm font-semibold mb-2 ml-1">Şifre</Text>
              <TextInput
                className="bg-umay-surface/40 border border-umay-primary/10 rounded-2xl px-5 py-4 text-umay-text text-base"
                placeholder="Şifreniz"
                placeholderTextColor="#A09E9D"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity className="items-end mt-3 pr-1">
                <Text className="text-umay-primary font-semibold text-sm">Şifremi Unuttum?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-12">
            <TouchableOpacity 
              className="w-full bg-umay-primary py-4 rounded-2xl items-center shadow-md active:scale-95 transition-transform"
              onPress={() => navigation.goBack()}
            >
              <Text className="text-umay-white font-bold text-lg tracking-wide">Giriş Yap</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-10 pb-10">
            <Text className="text-umay-text/60">Hesabınız yok mu? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text className="text-umay-primary font-bold">Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
