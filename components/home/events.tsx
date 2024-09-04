import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Event from './subComponents/event';

const eventsData = [
  {
    title: 'Esala Perahera',
    description: 'A grand procession with elephants and traditional dancers honoring the Sacred Tooth Relic.',
  },
  {
    title: 'Galle Literary Festival ',
    description: "Celebrating literature with global authors in Galle's historic setting.",
  },
  {
    title: 'Arugam Bay Surf Classic',
    description: 'An exciting surf competition attracting international surfers to Sri Lanka’s top surf spot.',
  },
  {
    title: 'Yala Wildlife Safari',
    description: "Explore Yala's wildlife, including leopards and elephants, on guided safaris.",
  },

];

const Events: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }} className='mx-4'>
      <Text className='text-white my-3' style={{ fontSize: 24,}}>Seasonal Events</Text>
      {eventsData.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </ScrollView>
  );
};

export default Events;