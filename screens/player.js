import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native'

const Background = styled.View`
    flex: 1;
    background-color: grey;
    padding-top: 50px;
`;

const TopBar = styled.View``;

TopBar.Title = styled.Text``;
TopBar.SubTitle = styled.Text``;


export function PlayerScreen() {
    return (
        <Background >
            <TopBar>
                <TopBar.Title>Tocanto podcast</TopBar.Title>
                <TopBar.SubTitle>Bem Vindo ao Spocast</TopBar.SubTitle>
            </TopBar>
            
        </Background >
    );
}

