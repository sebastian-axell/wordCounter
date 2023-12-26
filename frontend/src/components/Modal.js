

const Modal = ({
    handleCloseModal,
    showModal,
    response,
    globalShowModal,
})=>{
    const success = response['result'] === "SUCCESS" ? true : false;
    return (
        <>
          {showModal && (globalShowModal || !success) ? (
          <>
            <div className="backdrop-blur-sm justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className={`text-3xl font-semibold ${success ? "text-green-500" : "text-red-500"}`}>{response['result']}</h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className={`my-4 text-blueGray-500 text-lg leading-relaxed ${success ? "text-green-700" : "text-red-700"}`}>{response['message']}</p>
                  </div>
                  <div className="flex justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <div className="flex items-center">
                      <input 
                      id="checkboxForGlobalshowModal" 
                      type="checkbox" 
                      name="checkboxForGlobalshowModal"
                      disabled={!success ? "disabled" : ""}
                      defaultChecked={!success ? "checked" : "false"}
                      className="w-4 h-4 border-yellow-300 rounded focus:ring-blue-500 focus:ring-2 outline-none" />
                      <label for="checkboxForGlobalshowModal" className="ms-2 pb-0.5 text-sm font-medium text-gray-900">Don't see this again</label>
                    </div>
                    <div>
                      <button
                          className="text-yellow-500 background-transparent font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => handleCloseModal()}
                      >
                          Close
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ): null}
    </>
    )
}

export default Modal;