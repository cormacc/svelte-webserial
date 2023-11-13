import { createMachine, interpret, assign } from 'xstate';
// import { useMachine } from '@xstate/svelte';

export const enum States {
    AwaitPort = 'AwaitPort',
    AwaitConnection = 'AwaitConnection',
    Connected = 'Connected'
}

export const enum Events {
    GotPort = 'GotPort',
    OpenPort = 'OpenPort',
    LostPort = 'LostPort'
}

export const enum Actions {
    logEvent = 'logEvent'
}

//TODO: Wrap AwaitConnection and Connected in a HasPort parent state?
export const webserialMachine = createMachine(
    {
        // predictableActionArguments: true,
        id: 'webserial',
        initial: States.AwaitPort,
        // initial: "0",
        context: { port: null },
        states: {
            [States.AwaitPort]: {
                entry: [Actions.logEvent],
                on: { [Events.GotPort]: {
                    actions: [Actions.logEvent, assign({ port: "COM3" })],
                    target: States.AwaitConnection
            }}
            },
            [States.AwaitConnection]: {
                on: {
                    [Events.LostPort]: {
                        actions: [Actions.logEvent, assign({ port: null})],
                        target: States.AwaitPort
                    },
                    [Events.OpenPort]: States.Connected
                },
            },
            [States.Connected]: {
                on: { [Events.LostPort]: States.AwaitPort }
            }
        },
    },
    {
        actions: {
            [Actions.logEvent]: (ctx, evt) => { console.log('evt: ', evt, 'ctx: ', ctx) }
        }
    }
);


// This can only be done within a component
// export const {state, send}  = useMachine(webserialMachine);

//N.B. interpret => createActor in upcoming xstate v5
// export const webserialService = interpret(webserialMachine).start();
