import React from 'react'
function Stats() {
    return ( 
        <div>
        <div className="flex items-center justify-center mt-28">
        <div className="container flex w-[72%] items-center justify-center">
            <div className="left w-1/2 p-2 pr-16"> 
                 <h1 className='font-inter text-2xl'>Trust with confidence</h1>
                
                 <h2 className="font-inter text-xl mt-10">Customer-first always</h2>
                 <div className="font-inter text-gray-600 mt-2">That's why 1.6+ crore customers trust Rokan with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</div>

                 <h2 className="font-inter text-2xl mt-8">No spam or gimmicks</h2>
                 <div className="font-inter text-gray-600 mt-2">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a href="">Our philosophies.</a></div>

                 <h2 className="font-inter text-xl mt-8">The Rokan universe</h2>
                 <div className="font-inter text-gray-600 mt-2">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</div>

                 <h2 className="font-inter text-xl mt-8">Do better with money</h2>
                 <div className="font-inter text-gray-600 mt-2">With initiatives like <a href="">Nudge</a> and<a href="">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</div>
            </div>
            <div className="right w-1/2">
                <img src="media/ecosystem.png" alt="" className='m-2' />
                <div className='text-center text-blue-500 '>
                    <a href="" className='mx-5'>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        </div>
        <div className='flex items-center justify-center mt-8'>
            <img src="media/pressLogos.png" alt="" />
        </div>
        </div>

     );
}

export default Stats;