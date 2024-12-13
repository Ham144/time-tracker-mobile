import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesApp } from "@/app/(tabs)/index";

const explore = () => {
	return (
		<View style={stylesApp.container}>
			<Text>explore</Text>
			<Button title="TEKN"></Button>
		</View>
	);
};

export default explore;

const styles = StyleSheet.create({});
