import Password from '@/app/component/Password'
import React from 'react'

const ChangePass = () => {
  return (
   <div className='w-[480px] flex flex-col items-center mx-auto gap-8 mt-10 '>

      <Password
      inputClass='border border-[#21E6A0]'
      label={`New Password`}
      labelClass={`text-[#000000] text-xl`}
      icon='text-[#000000]'
      />
      <Password
      inputClass='border border-[#21E6A0]'
      label={`Confirm Password`}
      labelClass={`text-[#000000] text-xl`}
      icon='text-[#000000]'
      />

      <button className="bg-gradient-to-r from-[#21E6A0] to-[#6DF844] text-[#000000] w-[50%]  font-semibold font-inter  py-3 rounded-lg mt-5 cursor-pointer">
            Update Password
          </button>
      
    </div>

  )
}

export default ChangePass
