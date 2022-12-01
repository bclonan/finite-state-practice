import React, { useCallback, useEffect, useState } from 'react';
import {
    Center,
    Heading,
    Box,
    View,
    Text,
    Container,
    Button,
    VStack,
    HStack,
    Divider,
    Spacer,
    Image,
    Select
} from 'native-base';

// Import our machine
import { useMachine } from '@xstate/react';
import { bombGameMachine } from '@machines/bombGameMachine';
import { send } from 'xstate/lib/actions';

// Config options
const gameRulesConfig = ['A Game where you have to defuse a bomb by guessing the correct code.']
const gameDifficultiesConfig = [
    `Easy: 3 wires`,
    `Medium: 5 wires`,
    `Hard: 8 wires`,
];
const gameModeOptionsConfig = [
    { name: 'Easy', value: 'easy', wireCount: 3 },
    { name: 'Medium', value: 'medium', wireCount: 5 },
    { name: 'Hard', value: 'hard', wireCount: 8 },
];

// Screens - Step One States 

function IdleScreen({ ...props }) {
    return (
        <View flex={1} backgroundColor={"amber.100"}>
            {/* header */}
            <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
                <Heading size={"2xl"}>Bomb Game</Heading>
            </View>
            {/* rules */}
            <View flex={1} justifyContent={"center"}>
                <Center>
                    <Box maxW="400" width="90%" backgroundColor={"blue.200"}>
                        <Heading size={"lg"}>Rules</Heading>
                        <VStack space={2} alignItems={"center"}>
                            {gameRulesConfig.map((rule, index) => {
                                return (
                                    <Text key={index}>{rule}</Text>
                                )
                            }
                            )}
                        </VStack>
                    </Box>

                </Center>

            </View>
            {/* footer */}
            <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
                <HStack space={2} alignItems={"center"}>
                    <Button onPress={() => props.send('START_GAME')}>Start Game</Button>
                </HStack>
            </View>
        </View>
    );
}

function SetupScreen({ ...props }) {
        {/* SETUP a function to subscribe to the state of the machine */}
    {/* we will be listening for the following events
        - 'SELECT_MODE'
        - 'PRESS_START'
*/}
    return (
        <View flex={1} backgroundColor={"amber.100"}>
            {/* header */}
            <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
                <Heading size={"2xl"}>Game Setup</Heading>
            </View>
            {/* rules */}
            <View flex={1} justifyContent={"center"}>
                <Center>
                    <Box maxW="400" width="90%" backgroundColor={"blue.200"}>
                        <Heading size={"lg"}>Difficulty</Heading>
                        <VStack space={2} alignItems={"center"}>
                            {gameDifficultiesConfig.map((rule, index) => {
                                return (
                                    <Text key={index}>{rule}</Text>
                                )
                            }
                            )}
                        </VStack>
                    </Box>
                </Center>
                <Spacer />
                <Box maxW="400" width="90%" backgroundColor={"blue.200"}>
                        <Heading size={"lg"}>Select Mode</Heading>
                        <VStack space={2} alignItems={"center"}>
                            {/* <Select
                                
                                minWidth={200}
                                accessibilityLabel="Select Mode"
                                placeholder="Select Mode"   
                                onValueChange={(itemValue) => props.send('SELECT_MODE', { mode: itemValue })}
                            >
                                {gameModeOptionsConfig.map((mode, index) => {
                                    return (
                                        <Select.Item key={index} label={mode.name} value={mode.value} />
                                    )
                                }
                                )}
                            </Select> */}
                        </VStack>
                    </Box>

            </View>
            {/* footer */}
            <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
                <HStack space={2} alignItems={"center"}>
                    <Button onPress={() => props.send('PRESS_START')}>Start Game</Button>
                </HStack>
            </View>
        </View>
    );
}

function PlayingScreen({ ...props }) {
    {/* SETUP a function to subscribe to the state of the machine */}
    {/*
        - 'SELECT_WIRE'
        - 'BOMB_DETONATED'
        - 'BOMB_DEFUSED'

        - CONTEXT
        - wireCount - for # of boxes
        - currentWire - for the current wire selected
        - difficulty - for the difficulty of the game
    */}
    return (
        <View flex={1} backgroundColor={"amber.100"}>
        {/* header */}
        <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
            <Heading size={"2xl"}>Cut the Wires !@</Heading>
        </View>
            {/* stack of wires 
                - pressable
                - on press send event to machine
                - save wire state in primary machine
            
            */}
            
    </View>
    );
}

function GameOverScreen({ ...props }) {
        {/* SETUP a function to subscribe to the state of the machine */}
    {/*
        - 'PRESS_REPLAY'

        - CONTEXT
        - image 
        - message 
        - win_state 
    */}
    return (
        <View flex={1} backgroundColor={"amber.100"}>
        {/* header */}
        <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
            <Heading size={"2xl"}> {/* result header : you won the game you lost the game */}</Heading>
        </View>
        {/* rules */}
        <View flex={1} justifyContent={"center"}>
            <Center>
                <Box maxW="400" width="90%" backgroundColor={"blue.200"}>
                    {/* result image : */}
                     {/* result message : */}
                </Box>
            </Center>
            <Spacer />
            <Box maxW="400" width="90%" backgroundColor={"blue.200"}>
                    <Heading size={"lg"}>Select Mode</Heading>
                    <VStack space={2} alignItems={"center"}>
                        {/* <Select
                            
                            minWidth={200}
                            accessibilityLabel="Select Mode"
                            placeholder="Select Mode"   
                            onValueChange={(itemValue) => props.send('SELECT_MODE', { mode: itemValue })}
                        >
                            {gameModeOptionsConfig.map((mode, index) => {
                                return (
                                    <Select.Item key={index} label={mode.name} value={mode.value} />
                                )
                            }
                            )}
                        </Select> */}
                    </VStack>
                </Box>

        </View>
        {/* footer */}
        <View flex={1} backgroundColor={"amber.100"} justifyContent={"center"} alignItems={"center"}>
            <HStack space={2} alignItems={"center"}>
                <Button onPress={() => props.send('START_GAME')}>Replay</Button>
            </HStack>
        </View>
    </View>
    );
}


export const Scene = () => {
    const [state, send] = useMachine(bombGameMachine);
    const [screen, setScreen] = useState(state.value);

    const changeScreen = (currentState: string) => {
        switch (currentState) {
            case 'idle':
                return <IdleScreen send={send} />;
            case 'setup':
                return <SetupScreen send={send} />;
            case 'playing':
                return <PlayingScreen send={send} />;
            case 'gameOver':
                return <GameOverScreen send={send} />;
            default:
                // impossible
                return <></>;
        }
    };


    useEffect(() => {
        setScreen(changeScreen(state.value));
    }, [state]);

    return (
        <Box flex={1} >
            <Box flex={2} bg="black">
                {screen ? screen : <></>}
            </Box>
        </Box>
    );
};
