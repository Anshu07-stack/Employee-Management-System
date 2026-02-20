import { useState } from "react"


const Header = (props) => {
  // const [username,setUsername] = useState('')
  // console.log(data)


  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }
  // console.log(props.changeUser)

  const logoutUser = ()=>{
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
    // window.location.reload()
  }
  
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium text-white'>
         Hello 
         <br /> 
         <span className='text-3xl font-semibold'> 👋</span> 
          </h1>
      <button
      onClick={logoutUser}
      className='bg-red-500 text-white text-lg font-medium px-3 py-2 rounded-sm ' 
      >Log Out</button>
    </div>
  )
}

export default Header
