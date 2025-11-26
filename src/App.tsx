//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { Dialog } from '@radix-ui/react-dialog'

import Titulo from './Titulo'
import AdicionarTarefa from './AdicionarTarefa'
import CrdTarefas from './CrdTarefas'
import { useState } from 'react'


function App() {
    const [listaTarefas, setListaTarefas] = useState<string[]>([])
    const [deletarTarefa, setDeletarTarefa] = useState<string[]>([])
  return (
    <>
    <header>
    <Titulo />
    </header>
     
    <main>
    <AdicionarTarefa listaTarefas={listaTarefas} setListaTarefas={setListaTarefas}/>
    <CrdTarefas listaTarefas={listaTarefas}/>
    </main>
      
    </>
  );
};

export default App;
