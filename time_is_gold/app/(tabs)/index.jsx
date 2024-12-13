import { Button, StyleSheet, Text, ToastAndroid, View } from "react-native";
import React from "react";

const app = () => {
	return (
		<View style={stylesApp.container}>
			<Text style={stylesApp.textNormal}>app</Text>
			<Button
				onPress={() => {
					ToastAndroid?.show("Hello WORLd", ToastAndroid.LONG);
				}}
				title="Hello World"
				style={stylesApp.buttonBlue}
			/>
		</View>
	);
};

export default app;

export const stylesApp = StyleSheet.create({
	container: {
		flexDirection: "column",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		rowGap: 2,
		columnGap: 4,
		padding: 2,
		backgroundColor: "pink",
	},
	buttonBlue: {
		padding: 10,
		backgroundColor: "red",
		color: "white",
		textAlign: "center",
		borderRadius: 60,
	},
	textNormal: {
		fontSize: 22,
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
		fontStyle: "italic",
	},
});
