import React, {useContext, useCallback, useEffect, useState} from 'react';
import {
    Button ,
    Card ,
    Center,
    FormControl,
    Input,
    Heading,
    Box as NBBox,
    View as NBView,
    Text as NBText,
  } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { useMachine } from '@xstate/react';
import { basic } from '../machines/index';
import { Theme } from './theme/index';

export const Home = () => {
    const [current, send] = useMachine(basic);
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFetch = useCallback(() => {
        send('FETCH');
    }, [send]);

    const handleResolve = useCallback(() => {
        send('RESOLVE');
    }, [send]);

    const handleReject = useCallback(() => {
        send('REJECT');
    }, [send]);

    const handleRetry = useCallback(() => {
        send('RETRY');
    }, [send]);

    useEffect(() => {
        if (current.matches('loading')) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [current]);

    useEffect(() => {
        if (current.matches('success')) {
            setResult(current.context.result);
        } else {
            setResult('');
        }
    }, [current]);

    useEffect(() => {
        if (current.matches('failure')) {
            setError(current.context.error);
        } else {
            setError('');
        }
    }, [current]);

    return (
            <Center flex={1}>
                <Card style={styles.card}>
                    <Card>
                        <Heading>Basic</Heading>
                        <Text>Basic example</Text>
                    </Card>
                    <NBBox>
                        <FormControl>
                            <FormControl.Label>Input</FormControl.Label>
                            <Input
                                value={input}
                                onChangeText={setInput}
                                placeholder="Enter input"
                            />
                        </FormControl>
                        <Button
                            onPress={handleFetch}
                            isLoading={loading}
                            disabled={loading}
                            style={styles.button}
                        >
                            Fetch
                        </Button>
                        <Button
                            onPress={handleResolve}
                            isLoading={loading}
                            disabled={loading}
                            style={styles.button}
                        >
                            Resolve
                        </Button>
                        <Button
                            onPress={handleReject}
                            isLoading={loading}
                            disabled={loading}
                            style={styles.button}
                        >
                            Reject
                        </Button>
                        <Button
                            onPress={handleRetry}
                            isLoading={loading}
                            disabled={loading}
                            style={styles.button}
                        >
                            Retry
                        </Button>
                        <NBView style={styles.result}>
                            <NBText>Result: {result}</NBText>
                            <NBText>Error: {error}</NBText>
                        </NBView>
                    </NBBox>
                </Card>
            </Center>
    );
};

export default function App() {
return (
    <Theme>
        <Home />
    </Theme>
    );
}

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