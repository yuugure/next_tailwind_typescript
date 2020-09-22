const Card = props => (
  <div className="mb-6 p-4 md:w-1/3 md:mb-0 flex flex-col justify-center items-center max-w-sm mx-auto">
    <div className="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
      <div className="inline-flex">
        <div className="flex-1 h-4 w-4 m rounded-full m-1 bg-yellow-100">
          <div className="h-2 w-2 rounded-full m-1 bg-yellow-500"></div>
        </div>
        <div className="text-teal-700">{props.title}</div>
      </div>
      <div className="text-teal-600 text-left">{props.description}</div>
    </div>
  </div>
)

export default Card
