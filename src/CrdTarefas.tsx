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
import { CircleCheck } from 'lucide-react';
//import { useState } from 'react';

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
      setListaTarefas((prev: any[]) => prev.filter(id => id !== tarefa));
      toast(
         <div className="text-red-400 flex items-center gap-2 ">
            <CircleCheck />
            <p>Tarefa Deletada com Sucesso!</p>
         </div>
      );
   }

   return (
      <div className="bg-gray-200 rounded-lg mt-6 flex ">
         <Tabs className='w-full bg-background shadow p-4 rounded-md' defaultValue="" >

            <TabsList className='gap-2'>
               <TabsTrigger value='todas'
                  className="data-[state=inactive]:text-black data-[state=active]:bg-green-400 text-white"
               >Todas
                  <span>{listaTarefas.length}</span>
               </TabsTrigger>

               <TabsTrigger value='ativas'
                  className="data-[state=inactive]:text-black data-[state=active]:bg-green-400 text-white">Ativas
                  <span>{listaTarefas.filter((tarefa: any) => tarefa.ativo === true).length}</span>
               </TabsTrigger>

               <TabsTrigger value='concluidas'
                  //listaTarefas.filter((tarefa: any) => tarefa.ativo === false)
                  className="data-[state=inactive]:text-black data-[state=active]:bg-green-400 text-white">Concluídas
                  <span>{listaTarefas.filter((tarefa: any) => tarefa.ativo === false).length}</span>
               </TabsTrigger>

            </TabsList>

            <TabsContent value='todas' className=''>
               <Card
                  className=" shadow-lg relative shadow-none border-none">

                  {<div className="items-center p-3 sm:p-25">
                     {// Verifica se tem tarefas na lista
                        listaTarefas.length === 0 && (
                           <div>
                              <CircleCheck className="w-10 h-10 mx-auto mb-2 text-gray-400" />
                              <span>Adicione sua primeira tarefa acima</span>
                           </div>
                        )}
                     {
                        listaTarefas.map((tarefa: any, index: number) => (
                           <div key={index} className="flex border border-gray-300 p-10 rounded-md mb-2 gap-2">

                              <Checkbox
                                 onClick={() => {
                                    console.log("Tarefa Concluída")
                                    toggleTarefa(tarefa.id)
                                 }}
                                 className={`border-green-400 rounded-full size-5 cursor-pointer`} />
                              <span className={`${tarefa.ativo ? "" : "line-through text-gray-500"}`}>{tarefa.tarefa}</span>

                              {
                                 <Trash2 className="w-20 ml-auto cursor-pointer text-red-500"
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
                  className=" shadow-lg relative shadow-none border-none">

                  <div className="items-center p-3  sm:p-25">

                     {// Verifica se tem tarefas na lista
                        listaTarefas
                           .filter((tarefa: any) => tarefa.ativo).length === 0 ? (
                           <div className="text-center">
                              <CircleCheck className="w-10 h-10 mx-auto mb-2 text-gray-400 " />
                              <span>Você está em dia</span>
                           </div>
                        ) : (
                           listaTarefas
                              .filter((tarefa: any) => tarefa.ativo === true)
                              .map((tarefa: any, index: number) => (
                                 <div key={index} className="flex border border-gray-300 p-10 rounded-md mb-2 gap-2">

                                    <Checkbox
                                       onClick={() => {
                                          console.log("Tarefa Concluída");
                                          toggleTarefa(tarefa.id);
                                       }}
                                       className="border-green-400 rounded-full size-5 cursor-pointer"
                                    />

                                    <span className={`${tarefa.ativo ? "" : "line-through"}`}>{tarefa.tarefa}
                                    </span>

                                    <Trash2 className="w-20 ml-auto cursor-pointer text-red-500"
                                       onClick={() => {
                                          console.log(`Tarefa Deletada`)
                                          deleteTarefa(tarefa)
                                       }}
                                    />
                                 </div>

                              ))
                        )}

                  </div>

               </Card>
            </TabsContent>

            <TabsContent value='concluidas'>
               <Card
                  className=" shadow-lg relative shadow-none border-none">

                  <div className="items-center p-3 sm:p-25">

                     {
                        /* Mesmo quando a tarefa for adicionada, se o status dela não for false,ainda irá mostrar a mensagem de quando não tem tarefa nenhuma*/

                        listaTarefas.filter((tarefa: any) => tarefa.ativo === false).length === 0 ? (
                           <div>
                              <CircleCheck className="w-10 h-10 mx-auto mb-2 text-gray-400 " />
                              <span>Não tem tarefas concluídas ainda</span>
                           </div>
                        ) : (
                           listaTarefas.filter((tarefa: any) => tarefa.ativo === false)
                              .map((tarefa: any, index: number) => (
                                 <div key={index} className="flex border border-gray-300 p-10 rounded-md mb-2 gap-2 text-gray-500">
                                    <Checkbox
                                       onClick={() => {
                                          console.log("Tarefa Concluída")
                                          toggleTarefa(tarefa.id)
                                       }}
                                       className={`border-green-400 rounded-full size-5 cursor-pointer`}
                                    />
                                    <span className={`${tarefa.ativo ? "" : "line-through"}`}>{tarefa.tarefa}
                                    </span>

                                    <Trash2 className="w-20 ml-auto cursor-pointer text-red-500"
                                       onClick={() => {
                                          console.log(`Tarefa Deletada`)
                                          deleteTarefa(tarefa)
                                       }}
                                    />
                                 </div>
                              ))
                        )}
                  </div>
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
// ao adicionar a tarefa vem ativa, para eu conseguir deletar ou marcar como concluída e ao eu fazer isso aparecer uma linha que risca a tarefa, preciso alterar o estado dela para false



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



/*
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
               */