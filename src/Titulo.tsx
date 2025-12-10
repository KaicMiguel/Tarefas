import { CircleCheck } from 'lucide-react';
const titulo = () => {
  return (
    <>
      <div className="pb-3 text-center p-5">
        <CircleCheck className="w-10 h-10 mx-auto mb-2 text-green-400 " />
        <h1 className='text-4xl font-bold'>TAREFAS</h1>
        <p className="text-gray-500 mt-2">Organize suas tarefas do dia, e seja mais eficiente!!</p>
      </div>
    </>
  )
}

export default titulo;
