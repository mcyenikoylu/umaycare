export type RootStackParamList = {
  Main: undefined;
  // Auth ekranları buraya eklenebilir
  // Login: undefined;
  // Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  // Diğer tab ekranları buraya eklenebilir
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
