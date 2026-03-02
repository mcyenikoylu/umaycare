import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-umay-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        className="flex-1"
      >
        <ScrollView className="flex-1 px-8 pt-6 pb-20" showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6">
            <Text className="text-umay-text font-bold text-lg">← Geri</Text>
          </TouchableOpacity>
          
          <Text className="text-4xl font-extrabold text-umay-text mb-3 tracking-snug">
            Aramıza{'\n'}Katılın ✨
          </Text>
          <Text className="text-base text-umay-text/60 mb-8 leading-6">
            Yeni bir hesap oluşturarak yolculuğunuza hemen başlayın.
          </Text>
          
          <View className="space-y-4 gap-y-4">
            <View>
              <Text className="text-umay-text text-sm font-semibold mb-2 ml-1">Ad Soyad</Text>
              <TextInput
                className="bg-umay-surface/40 border border-umay-primary/10 rounded-2xl px-5 py-4 text-umay-text text-base"
                placeholder="Örn: Ayşe Yılmaz"
                placeholderTextColor="#A09E9D"
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
            </View>
            
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
                placeholder="Şifreniz (En az 8 karakter)"
                placeholderTextColor="#A09E9D"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View>
              <Text className="text-umay-text text-sm font-semibold mb-2 ml-1">Şifre Tekrar</Text>
              <TextInput
                className="bg-umay-surface/40 border border-umay-primary/10 rounded-2xl px-5 py-4 text-umay-text text-base"
                placeholder="Şifrenizi tekrar girin"
                placeholderTextColor="#A09E9D"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            
          </View>
          
          <TouchableOpacity 
            className="w-full bg-umay-primary py-4 rounded-2xl items-center shadow-md active:scale-95 transition-transform mt-10"
            onPress={() => navigation.goBack()}
          >
            <Text className="text-umay-white font-bold text-lg tracking-wide">Kayıt Ol</Text>
          </TouchableOpacity>
          
          <View className="flex-row justify-center mt-8 pb-10">
            <Text className="text-umay-text/60">Zaten hesabınız var mı? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-umay-primary font-bold">Giriş Yap</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
