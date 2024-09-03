import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons

const StepItem = ({ number, title }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: "#707070",
    }}
  >
    <Text style={{ color: "yellow", fontWeight: "bold", marginRight: 10 }}>
      {number}
    </Text>
    <Text style={{ color: "white", flex: 1 }}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
  </View>
);

export default function Visa() {
  return (
    <ScrollView
      style={{ backgroundColor: "black", flex: 1, paddingHorizontal: 16 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
          marginBottom: 24,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#606060",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="star" size={16} color="white" />
          <Text style={{ color: "white", fontSize: 12, marginLeft: 4 }}>
            Premium services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="document-text" size={16} color="black" />
          <Text style={{ color: "black", fontSize: 12, marginLeft: 4 }}>
            Apply for a visa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#606060",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="calendar" size={16} color="white" />
          <Text style={{ color: "white", fontSize: 12, marginLeft: 4 }}>
            Book an appointment
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#606060",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 50,
          marginBottom: 24,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", marginRight: 8 }}>
          Track Visa Application
        </Text>
        <Ionicons name="time-outline" size={16} color="white" />
      </TouchableOpacity>

      <Text style={{ color: "white", fontSize: 16, marginBottom: 16 }}>
        Step-by-step guide
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: "blue",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: 24,
        }}
      >
        <View style={{ backgroundColor: "#008080", padding: 16 }}>
          <Text
            style={{ color: "#40E0D0", fontWeight: "bold", marginBottom: 4 }}
          >
            On Arrival Visa
          </Text>
          <Text style={{ color: "white", fontSize: 12 }}>
            Visa on arrival facility is available at the Visa Counter at
            Terminal 3, Dubai International Airport.
          </Text>
          <Ionicons
            name="arrow-forward"
            size={20}
            color="#5eead4"
            style={{ position: "absolute", right: 10, top: 10 }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#006480",
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Ready to apply visa?
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingHorizontal: 16,
              paddingVertical: 4,
              borderRadius: 50,
            }}
          >
            <Text style={{ color: "#006480", fontWeight: "bold" }}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={{ padding: 16 }}>
          <StepItem number="1" title="Select Your Visa Type" />
          <StepItem number="2" title="Start Your Application" />
          <StepItem number="3" title="Schedule an Appointment" />
          <StepItem number="4" title="Make a Payment" />
          <StepItem number="5" title="Visit the Application Centre" />
          <StepItem number="6" title="Monitor Your Application" />
          <StepItem number="7" title="Pick Up Your Passport" />
        </View>
      </View>
    </ScrollView>
  );
}
