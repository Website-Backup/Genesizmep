import React from 'react'
import RequestForm from '../containers/Request/RequestForm'
import { useFirebase } from '../context/Firebase'
const RequestPage = () => {
  
  const firebase = useFirebase()
  async function addData(userdata){
        await firebase.addDocument(userdata);
  }
  return (
    <div className=' md:mt-40'>
     <RequestForm handleSave={addData}></RequestForm>
    </div>
  )
}

export default RequestPage