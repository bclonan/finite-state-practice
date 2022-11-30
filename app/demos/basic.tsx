import React from 'react';
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
import { basic } from '@machines/index';

export const Scene = () => {
    const [state, send] = useMachine(basic);

    return (
            <Center flex={1}>
                <Card style={styles.card}>
                    <Card>
                        <Heading>Basic</Heading>
                        <Text>Current state: {state.value}</Text>
                        {state.matches('FETCH') && <Text>Loading...</Text>}
                        {state.matches('RESOLVE') && <Text>Promise Rejected</Text>}
                        {state.matches('REJECT') && <Text>Promise Resolved</Text>}
                        {state.matches('RETRY') && <Text>Promise Resolved</Text>}
                    </Card>
                    <NBBox>
                        <Button
                            onPress={() => send('FETCH')}
                            style={styles.button}
                        >
                            Fetch
                        </Button>
                        <Button
                            onPress={() => send('RESOLVE')}
                            style={styles.button}
                        >
                            Resolve
                        </Button>
                        <Button
                            onPress={() => send('REJECT')}
                            style={styles.button}
                        >
                            Reject
                        </Button>
                        <Button
                            onPress={() => send('RETRY')}
                            style={styles.button}
                        >
                            Retry
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