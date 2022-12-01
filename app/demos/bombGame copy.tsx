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
    Image
} from 'native-base';

// Import our machine
import { useMachine } from '@xstate/react';
import { bombGameMachine } from '@machines/bombGameMachine';
import { send } from 'xstate/lib/actions';

// Screens - Step One States 

function IdleScreen({...props}) {
   
    return (
        <View flex={1}>
            
        </View>
    );
}

function SetupScreen({...props}) {
return (
        <></>
    );
}

function PlayingScreen({...props}) {
    return (
        <></>
    );
}

function GameOverScreen({...props}) {
    return (
        <></>
    );
}


export const Scene = () => {
    const [state, send] = useMachine(bombGameMachine);
    const [screen, setScreen] = useState(state.value);

    const changeScreen = (currentState : string) => {
        switch (currentState) {
            case 'idle':
                return <IdleScreen send={send} />;
            case 'setup':
                return <SetupScreen send={send}  />;
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
