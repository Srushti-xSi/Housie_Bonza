export type RootStackParamList = {
    Splash: undefined;
    Welcome: undefined;
    Login: { username: string } | undefined;
    Register: undefined;
    RoomCode: { username: string | undefined };
    // Define other screens and their params here
  };