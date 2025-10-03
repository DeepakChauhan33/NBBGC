import React from 'react'

const PayFee = () => {
    return (
        <>
            <section className="p-6 md:p-10 space-y-5">

                <div className='w-full'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam, in id praesentium neque pariatur optio totam tenetur. Similique, minima excepturi unde quod dicta eligendi, animi optio, molestiae temporibus dolore delectus repellat a laboriosam. Obcaecati unde, cupiditate eaque consequatur nihil amet! Eligendi, deserunt consequatur eveniet aspernatur eos et doloribus at?
                    </p>

                    <a 
                    className='text-[20px]'
                    href="#">Check fee history!</a>
                </div>
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Pay Fee</h2>

                    <form className="space-y-5">
                        {/* Student Name */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Student Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Roll Number */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Roll Number</label>
                            <input
                                type="text"
                                placeholder="Enter your roll number"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Course */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Course</label>
                            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>BCA</option>
                                <option>BBA</option>
                                <option>BA</option>
                                <option>B.Sc</option>
                            </select>
                        </div>

                        {/* Semester */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Semester</label>
                            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>

                        {/* Amount */}
                        <div>
                            <label className="block mb-2 text-sm font-medium">Fee Amount</label>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Payment Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default PayFee
