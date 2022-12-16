import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getAlerts } from './api/openAiIntegration';
import { AlertsList } from './components/AlertsList';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <AlertsList />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
