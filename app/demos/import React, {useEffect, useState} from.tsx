import React, {useEffect, useState} from 'react';
import {
    Button ,
    Card ,
    Center,
    Heading,
    Box as NBBox,
    View as NBView,
    Text,
  } from 'native-base';
import { StyleSheet } from 'react-native';

import { useMachine } from '@xstate/react';
import { lightMachine } from '@machines/index';

export const Scene = () => {
    const initial = 'off';
    const [state, send] = useMachine(lightMachine);
    const [lightState, setLightState] = useState(initial);


   const toggleLight = () => {
        if (lightState === 'on') {
            setLightState('off');
        } else {
            setLightState('on');
        }
    };

    
    useEffect(() => {
        setLightState(state.value);
    }, [state.value]);



    return (
            <Center flex={1}>
                <Card style={styles.card}>
                    <Card>
                        <Heading>The Light is</Heading>
                        <Text>{state.value}</Text>
                    
                    </Card>
                    <NBBox>
                        <Button
                            onPress={() => send('TURN_ON')}
                            style={styles.button}
                        >
                            TURN ON
                        </Button>
                        <Button
                            onPress={() => send('TURN_OFF')}
                            style={styles.button}
                        >
                            TURN_OFF
                        </Button>
                        {}
                        <Button
                            onPress={() => send('LIGHT_BROKEN')}
                            style={styles.button}
                        >
                            make broken
                        </Button>
                
                    </NBBox>
                 
                </Card>
            </Center>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    card: {
        width: '90%',
    },
    button: {
        marginTop: 10,
    },
    result: {
        marginTop: 10,
    },
});