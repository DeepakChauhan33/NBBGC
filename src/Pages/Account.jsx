import React from 'react'

const Account = () => {
    return (
        <>
            <main className='m-0.5 p-3 border-[1px]'>
                <div className='border-2'>
                    <h4 className='w-full'>
                        Hello, Deepak !
                    </h4>

                    <p className='border-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore.</p>
                </div>


                <ul>
                    <li>
                        <sapn>PERSONAL DETAILS</sapn>

                        <p>
                            Please complete your registration process by filling your Personal, Biometric, Address and Social Details.
                        </p>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>@social</td>
                                </tr>
                            </tbody>
                        </table>

                    </li>
                    <li></li>
                </ul>


                <ul className='border-2'>
                    <h5>Course Details</h5>
                    <li className='border-2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, illo numquam? At corrupti, quasi eos tenetur pariatur mollitia velit dicta excepturi, officia in itaque repellendus?
                    </li>
                    <li>
                        <div class="bd-example"><div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th><th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>

                                        <td>Cell</td>

                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr><tr><th scope="row">3</th>
                                        <td>Cell</td>
                                        <td>Cell</td>

                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default Account
