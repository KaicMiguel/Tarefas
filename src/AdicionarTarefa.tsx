"use client";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input"
import { GrFormAdd } from 'react-icons/gr'



const Adicionar = ({setListaTarefas, listaTarefas}:any) => {
    const [tarefa, setTarefa] = useState<string>("")
    return (
        <div className="flex gap-3 pr-5 pl-5 pb-5 pt-5 justify-center items-center border-black-500 border rounded-lg shadow-md">

            <Input value={tarefa} onChange={(e) => setTarefa(e.target.value)} className="bg-gray-100 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500" placeholder="Adicionar Tarefa... " />
            <Button onClick={() => {
                setListaTarefas([...listaTarefas, tarefa])
                setTarefa("")
            }} className="p-6 bg-green-400"><GrFormAdd />Adicionar</Button>
            
        </div>

        //pegar o valor que estiver no meu input e jogar na minha lista de tarefas
    )
}

export default Adicionar;