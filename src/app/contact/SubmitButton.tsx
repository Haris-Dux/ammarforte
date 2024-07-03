import React from 'react';
import { useFormStatus } from "react-dom";

const SubmitButton= () => {
    const { pending } = useFormStatus();

  return (
    <div className="mt-5 flex justify-start items-center">
    {pending ? (
      <button  disabled={pending} className="h-11 px-10 w-full sm:max-w-40 bg-[black] disabled:bg-[#3f3e3e] disabled:cursor-not-allowed text-white">
        <div
          className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white  rounded-full "
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </button>
    ) : (
      <button
       
        type="submit"
        className={`h-11 px-10 w-full sm:max-w-40 hover:bg-black bg-[#252525] text-white `}
      >
        Submit
      </button>
    )}
  </div>
  )
}

export default SubmitButton;
