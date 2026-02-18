import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div
    id='tasklist'
    className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 
     flex-nowrap py-5 w-full  mt-10'> 
        {/* <AcceptTask />
        <NewTask /> 
        <CompleteTask />
       <FailedTask/> */}

       {data.tasks.map((elem, id)=>{
         if(elem.active){
            return <AcceptTask key={id} />
         } 
         if(elem.newTask){
            return<NewTask  key={id}/>
         }
         if(elem.completed){
            return <CompleteTask  key={id}/>
         }
         if(elem.failed){
            return <FailedTask  key={id}/>
         }
       })}
     
      
    </div>
  )
}

export default TaskList
