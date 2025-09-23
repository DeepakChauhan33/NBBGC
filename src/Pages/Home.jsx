import React from 'react'

const Home = () => {
    return (
        <>

            <section className='lg:h-[100%] flex p-5 bg-gray-100 gap-1'>
                <div className=' hidden md:block h-[500px]'>
                    <img
                        className='h-full border-2'
                        src="https://img.lovepik.com/free-png/20211215/lovepik-school-season-png-image_401675255_wh1200.png"
                        alt="img" />


                </div>

                <div className="lg:max-w-1/2 lg:min-w-[40%] w-[90%] bg-white flex flex-col justify-center lg:p-10 p-3">
                    <h2 className="text-xl font-semibold mb-6 text-gray-700 text-center">USER LOGIN</h2>
                    <form className="space-y-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                            {/* Add icon with absolute positioning (optional) */}
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                            />
                        </div>

                        <div>
                            <select className='w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300'>
                                <option value="">Select </option>
                                <option value="student">Student</option>
                                <option value="staff">Staff</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                               <div className="flex items-center justify-end text-sm">
                           
                            <a href="#" className="text-purple-500 hover:underline">Forgot password?</a>
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-full font-semibold transition-shadow hover:shadow-lg mt-2">
                            LOGIN
                        </button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Home