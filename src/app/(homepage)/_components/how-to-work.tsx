import Image from 'next/image'

const How = () => {
  return (
    <div className="mt-20  w-full flex flex-col items-center justify-center p-2">
      <div className="md:text-5xl text-3xl font-semibold">
        How does this work?
      </div>
      <div className="flex md:flex-row flex-col-reverse w-11/12 justify-between mt-10 relative ">
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {' '}
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={400}
            height={300}
          />
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          1
        </div>
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Start with a template </p>
          <p className="text-base">
            A library of ready-made templates to start with
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-11/12 justify-between  relative ">
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Start with a template </p>
          <p className="text-base">
            A library of ready-made templates to start with
          </p>
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          2
        </div>
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {' '}
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse w-11/12 justify-between  relative ">
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {' '}
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={400}
            height={300}
          />
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          3
        </div>
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Start with a template </p>
          <p className="text-base">
            A library of ready-made templates to start with
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-11/12 justify-between  relative ">
        <div className="bg- md:w-full mx-5 md:px-14 text-black text-2xl ">
          <p>Start with a template </p>
          <p className="text-base">
            A library of ready-made templates to start with
          </p>
        </div>
        <div className="absolute top-0 md:left-1/2 left-0 bg-slate-300 h-full w-[1.5px]"></div>
        <div className="absolute top-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
          4
        </div>
        <div className="absolute bottom-0 md:left-1/2 left-0 border-2 border-gray-400 bg-white text-center flex items-center justify-center h-8 w-8 -translate-x-4 rounded-full">
        🤗 
        </div>
        <div className="  h-96  md:w-full flex items-center justify-center mx-5 md:mx-0">
          {' '}
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default How