import React from 'react'

const DigitalGaming = () => {
    return (
        <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:p-20 lg:px-20  md:p-12 items-center">
            {/* Image Section */}
            <div className='flex justify-center'>
                <img
                    src="/Home/gaming.jpg"
                    alt="Gaming Controller"
                    className=" shadow-lg lg:h-[80vh]"
                
                />
            </div>

            {/* Text Section */}
            <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4  text-gray-700">Digital Gaming Headset</h2>
                <span className="text-xl text-gray-600 line-through">$330.00 </span> 
                 <span className='text-yellow-500 text-2xl font-semibold lg:ms-2'>$230.00</span>
                <p className="text-gray-700 mt-4">
                    Donec varius quam metus, ac ultricies ligula facilisis quis. Donec condimentum gravida accumsan. Fusce laoreet sit amet velit ut pretium. Aenean a mi placerat urna mollis aliquam et quis justo. Nullam gravida sem quis dolor feugiat convallis. Donec faucibus lectus et fermentum blandit libero elit cursus enim.
                </p>
                <button className="mt-6 bg-yellow-500 text-white py-2 px-6  shadow-md hover:bg-yellow-600 transition">
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default DigitalGaming;