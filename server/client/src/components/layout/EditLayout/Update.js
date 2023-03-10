import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { updateTest } from '../../../apis/admin.test.api'
import { useNavigate } from 'react-router-dom'
import isFill from '../../../utils/isFill'

const UpdateButton = () => {
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate()
  const problems = useSelector(state => state.problemReducer.problems)
  const id = useSelector(state => state.todoReducer.index)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (problems.length) {
      const res = isFill(problems[problems.length - 1])

      if (res.isFull) {
        const res = await updateTest(id, problems)
        toast.success(`Totalmente ${problems.length} de preguntas guardadas`)
        navigate('/admin')
      }
      else {
        toast.error(`Please Fill the Following Sections: ${res.details}`)
      }
    }

    else {
      toast.error('No se puede guardar la prueba vacía. Haz al menos una pregunta.')
    }
  }

  return (
    <>
      {
        saving ?
          <div className='mb-8 py-5 w-full flex flex-row justify-center items-center cursor-wait bg-[#DE3A3A] text-white text-lg'>
            Saving...
          </div> :
          <div className='mb-8 py-5 w-full flex flex-row justify-center items-center cursor-pointer bg-[#DE3A3A] text-white text-lg' type="submit" onClick={handleSubmit}>
            Guardar prueba
          </div>
      }
    </>

  )
}

export default UpdateButton