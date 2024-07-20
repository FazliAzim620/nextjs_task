export default function OperatorCard({
  name,
  logo,
  rating,
  reviews,
  description,
  operatesIn,
  vesselsNumber,
  ferryTypes,
  flag,
  popularVessels,
  otherFlag,
}) {
  return (
    <div className="flex flex-col bg-white  rounded-lg border md:shadow-md">
      <div className="bg-gray-50 px-2 flex flex-col md:flex-row items-start pt-2 pb-0 justify-between border-b">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-full md:w-[200px] h-[50px]"
        />
        <div className="text-left md:text-right ">
          <h3 className="font-bold text-xl text-black  ">{name}</h3>
          <div className="flex justify-between items-start ">
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <span className="text-yellow-600 font-semibold">{rating}</span>
            <span className="ml-1 text-gray-900 font-medium">
              by {reviews} customers
            </span>
          </div>
        </div>
      </div>
      {/* <hr className="border-b border-2 py-3 px-0" /> */}
      <div className=" flex px-2 flex-col md:flex-row">
        {/* Left column */}
        <div className=" w-full md:w-1/3 pr-6">
          <div className="">
            <p>
              <span className="font-medium">Operates in</span> <br />
            </p>
            <div className="flex items-center gap-1">
              <img src={flag} alt="flag" className="w-[20px]" />
              {otherFlag && (
                <img src={otherFlag} alt="flag" className="w-[20px]" />
              )}
              <p> {operatesIn}</p>
            </div>
            <p className="pt-3">
              <span className="font-medium">Vessels number:</span>
              {vesselsNumber}
            </p>
            <p>
              <span className="font-medium">Ferry types:</span> {ferryTypes}
            </p>
            <div className="pt-3 pb-1">
              <p className="font-medium">Popular vessels:</p>
              {popularVessels.map((vessel, index) => (
                <>
                  <a
                    key={index}
                    href="#"
                    className="text-primary-button hover:underline "
                  >
                    {vessel}
                  </a>
                  ,
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-2/3 md:pl-6">
          <p className="text-gray-700  border-b">{description}</p>
          <div className="text-right py-1">
            <a
              href="#"
              className="text-primary-button font-medium hover:underline"
            >
              More about {name}{" "}
              <span className="rounded-full bg-primary-button text-white px-[2px]">
                ➔
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
