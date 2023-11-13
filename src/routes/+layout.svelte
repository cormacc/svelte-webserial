<script lang="ts">
import "../app.css";
import AppBar from '../components/AppBar.svelte'

// import { webserialService, States, Events } from '../services/webserialService.ts'
// import { useSelector } from '@xstate/svelte'

import { webserialMachine, States, Events } from '../services/webserialService.ts'
import { useMachine } from '@xstate/svelte';


//FIXME: Should be able to launch machine from the ts file using interpret...
//....  but not working for me so far, so calling useMachine here directly instead
//$: port = $webserialService.context.port
// const port = useSelector(webserialService, (state) => state.context.port)
// const port = "BLA"


const {state, send}  = useMachine(webserialMachine);
$: port = $state.context.port

</script>

<AppBar
  port={port}
  requestPort={() => send(Events.GotPort)}
  openPort={() => send(Events.OpenPort)}
  releasePort={() => send(Events.LostPort)}
  />

<slot />
