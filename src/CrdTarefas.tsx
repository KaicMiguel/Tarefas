//import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Card } from './components/ui/card';
import { Checkbox } from './components/ui/checkbox';
import { toast } from 'sonner';
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"


//toggle -> alternar entre dois estados

const CrdTarefas = ({ listaTarefas, setListaTarefas }: any) => {
   const toggleTarefa = (id: number) => {
      setListaTarefas((prev: any) =>
         prev.map((tarefa: any) =>
            tarefa.id === id ? { ...tarefa, ativo: !tarefa.ativo } : tarefa
         )
      );
   }

   const deleteTarefa = (tarefa: string) => {
      setListaTarefas((prev: any[]) => prev.filter(tarefa => tarefa.id !== tarefa.id));
      toast.success("Tarefa Deletada com Sucesso!")
   }

   return (
      <div className="bg-gray-200 rounded-lg mt-6 flex ">
         <Tabs className='w-full bg-background shadow p-4 rounded-md ' defaultValue='' >

            <TabsList className=''>
               <TabsTrigger value='todas'>Todas</TabsTrigger>
               <TabsTrigger value='ativas'>Ativas</TabsTrigger>
               <TabsTrigger value='concluidas'>Concluídas</TabsTrigger>
            </TabsList>
            <TabsContent value='todas' className=''>
               <Card
                  className="p-40 shadow-lg relative shadow-none border-none">

                  {<div className="">
                     {
                        listaTarefas.map((tarefa: any, index: number) => (
                           <div key={index} className="flex border border-gray-300 p-5 rounded-md mb-2 gap-2">

                              <Checkbox
                                 onClick={() => {
                                    console.log("Tarefa Concluída")
                                    toggleTarefa(tarefa.id)
                                 }}
                                 className={`border-green-400 rounded-full size-5 cursor-pointer`} />
                              <span className={`${tarefa.ativo ? "" : "line-through"}`}>{tarefa.tarefa}</span>

                              {
                                 <Trash2 className="w-20 ml-auto cursor-pointer"
                                    onClick={() => {
                                       console.log(`Tarefa Deletada`)
                                       deleteTarefa(tarefa)
                                    }
                                    }
                                 />
                              }

                           </div>
                        ))
                     }</div>
                  }
               </Card>
            </TabsContent>
            <TabsContent value='ativas'>
               <Card
                  className="p-40 shadow-lg relative">

                  {<div className="">
                     {
                        listaTarefas.map((tarefa: any, index: number) => (
                           <div key={index} className="flex border border-gray-300 p-5 rounded-md mb-2 gap-2">

                              <Checkbox
                                 onClick={() => {
                                    console.log("Tarefa Concluída")
                                    toggleTarefa(tarefa.id)
                                 }}
                                 className={`border-green-400 rounded-full size-5 cursor-pointer`} />
                              <span className={`${tarefa.ativo ? "" : "line-through"}`}>{tarefa.tarefa}</span>

                              {
                                 <Trash2 className="w-20 ml-auto cursor-pointer"
                                    onClick={() => {
                                       console.log(`Tarefa Deletada`)
                                       deleteTarefa(tarefa)
                                    }
                                    }
                                 />
                              }

                           </div>
                        ))
                     }</div>
                  }
               </Card>

            </TabsContent>
            <TabsContent value='concluidas'>


               <Card
                  className="p-40 shadow-lg relative">

                  {<div className="">
                     {
                        listaTarefas.map((tarefa: any, index: number) => (
                           <div key={index} className="flex border border-gray-300 p-5 rounded-md mb-2 gap-2">

                              <Checkbox
                                 onClick={() => {
                                    console.log("Tarefa Concluída")
                                    toggleTarefa(tarefa.id)
                                 }}
                                 className={`border-green-400 rounded-full size-5 cursor-pointer`} />
                              <span className={`${tarefa.ativo ? "" : "line-through"}`}>{tarefa.tarefa}</span>

                              {
                                 <Trash2 className="w-20 ml-auto cursor-pointer"
                                    onClick={() => {
                                       console.log(`Tarefa Deletada`)
                                       deleteTarefa(tarefa)
                                    }
                                    }
                                 />
                              }

                           </div>
                        ))
                     }</div>
                  }
               </Card>
            </TabsContent>


         </Tabs>

      </div>
   );
};
export default CrdTarefas;

// Ternário -> a=b ? { vai mostra oque vai serr vdd}  : vai mostrar oque vai ser false
// && => Usado para quando for quiser que faça apenas oque for verdadeiro 
//index é o 
// ao adicionar a tarefa vem ativa, para eu conseguir deletar ou marcar como concluída e ao eu faezr isso aparecer uma linha que risca a tarefa, preciso alterar o estado dela para false



// Consumo de API - Rick and Morty

/*const [character, setCharacter] = useState<[]>([]);

useEffect(() => {
   const fetchData = async () => {
      try {
         const response = await fetch("https://rickandmortyapi.com/api/character");

         if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
         }

         const data = await response.json();

         setCharacter(data.results);

      } catch (error: any) {
         console.error("Não foi possível buscar os dados:", error.message);
      }
   };
   fetchData();
}, []);*/



{/*
                  character.map((tarefa: any) => (
                     <>
                        <div className='bg-green-200 flex flex-col gap-'>
                           {tarefa.id}
                           {tarefa.name}
                        </div>
                        <div className='size-10'>
                           <img src={tarefa.image} alt="asadsa" />
                        </div>
                     </>
                  ))
               */}