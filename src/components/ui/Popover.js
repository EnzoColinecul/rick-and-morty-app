import React from 'react'

const Popover = ({ popoverShow, popoverRef }) => {
  return (
    <div
      className={
        (popoverShow ? "" : "hidden ") +
        "bg-gray-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
      }
      ref={popoverRef}
    >
      <div>
        <div
          className="bg-gray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
        >
          Need authentication
        </div>
        <div className="text-white p-3">
        Click on the "Login" button to authenticate and access favorites
        </div>
      </div>
    </div>
  )
}

export default Popover
