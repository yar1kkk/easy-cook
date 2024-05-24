// Login.tsx
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Logic for handling login
  };

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
