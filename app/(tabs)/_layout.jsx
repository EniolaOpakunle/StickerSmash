import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="todos"
        options={{
          title: 'Todos',
          headerShown:false,
          tabBarIcon: ({ color }) => <AntDesign name="shoppingcart" size={24} color="black" />,
        }}
      />
      {/* <Tabs.Screen
        name="order"
        options={{
          title: 'orders',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="clockcircleo" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color="black" />,
        }}
      /> */}
    </Tabs>
    
  );
}
