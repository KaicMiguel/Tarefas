//import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Card } from './components/ui/card';


const CrdTarefas = ({ listaTarefas }: any) => {
   return (
      <div className="bg-gray-200 rounded-lg mt-6 flex">
         <Card className="p-40 w-400 shadow-lg relative ">
            <div className='flex w-50 rounded-md gap-5 absolute left-5 top-6'>
               <span className="bg-gray-100 border border-gray-200 p-3 rounded-lg">Todas</span>

               <span className="bg-gray-100 border border-gray-200 p-3 rounded-lg">Ativas</span>

               <span className="bg-gray-100 border border-gray-200 p-3 rounded-lg">Concluídas</span>
            </div>
            
            { <div className="">
               {
                  listaTarefas.map((tarefa: any) => (
                     <div className="flex border border-gray-300 p-5 rounded-md mb-2 ">
                        {tarefa}
                      

                      { 
                       
                        <Trash2 className="w-20 ml-auto"/>
                      }
                       
                     </div>
                  ))
               }</div> 
            }
         </Card>
      </div>
   );
};
export default CrdTarefas;

// Ternário -> a=b ? { vai mostra oque vai serr vdd}  : vai mostrar oque vai ser false






































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


<div>
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
               */}</div>