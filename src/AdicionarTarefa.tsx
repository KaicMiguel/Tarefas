"use client";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input"
import { GrFormAdd } from 'react-icons/gr'
import { useState } from "react";
import { toast } from "sonner";
import { CircleCheck } from 'lucide-react';

/* interface Tarefa {
    id: number;
    tarefa: string;
    ativo: boolean;
}
*/
const Adicionar = ({ setListaTarefas }: any) => {


    const [tarefa, setTarefa] = useState<string>("")

    const handleAddTarefa = () => {
        //trim é usaado para não "retirar" os espaços do campo selecionado, ou seja, ele não deixa o cara adicionar uma tarefa sem digitar nada.
        if (!tarefa.trim()) return;
        setListaTarefas((prev: any) => [...prev, { id: prev.length + 1, tarefa: tarefa, ativo: true }])
        setTarefa("")
        toast(
            <div className="text-green-400 flex items-center gap-2">
                <CircleCheck />
                <p>Tarefa Adicionada com Sucesso!</p>
            </div>
        );
    }

    return (
        <div className="flex gap-3 pr-5 pl-5 pb-5 pt-5 justify-center items-center border-black-500 border rounded-lg shadow-md">

            <Input onKeyDown={(event: any) => {
                if (event.target.value === "") {
                    return
                }
                if (event.key === "Enter") {
                    handleAddTarefa()
                }
            }

            } value={tarefa} onChange={(e) => setTarefa(e.target.value)} className="bg-gray-100 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500" placeholder="Adicionar Tarefa... " />

            <Button
                disabled={!tarefa.trim()}
                onClick={() => {
                    console.log("Tarefa Adicionada")
                    handleAddTarefa()
                }} type="submit" className="p-6 bg-green-400 cursor-pointer"><GrFormAdd
                />Adicionar
            </Button>

        </div>
        //pegar o valor que estiver no meu input e jogar na minha lista de tarefas
    )
}

export default Adicionar;