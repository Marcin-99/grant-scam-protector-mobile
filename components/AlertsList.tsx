import { View, Text } from "react-native"
import React, { useState, useCallback } from 'react';
import { getAlerts } from "../api/openAiIntegration";
import { useQuery } from 'react-query';

export const AlertsList = () => {
  const { status, data } = useQuery(['alerts'], getAlerts)

  return (
    <View>
      {
        status === 'loading' ? <Text>Loading...</Text> : JSON.parse(data.data).map(({fullText, summaryItemColor, summary}, index) => (
          <Text key={index} style={{color: summaryItemColor}}>{ fullText }</Text>
        ))
      }
    </View>
  )
}
