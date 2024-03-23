

const Login = () => {
   

    return (
        <>
            



            <section className="relative flex justify-center mb-10 lg:items-center">
                <div className="w-full px-2 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">


                    <div className="max-w-lg mx-auto">
                       <h1 className="text-center justify-center font-bold text-2xl">Apparelpml</h1>

                        <form  className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl  py-16">
                            <p className="text-lg font-medium">Sign in to your account</p>

                            <div>
                                <label htmlFor="Email" className="text-sm font-medium">Email & Contact</label>

                                <div className="relative mt-1">
                                    <input
                                        type="email"
                                        id="Email"
                                        name='Email'
                                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                        placeholder="Enter Valid email"
                                        required
                                    />

                                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="stroke-2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <div className="flex ">
                                    <label htmlFor="Password" className="text-sm font-medium">Password</label>
                                    
                                </div>

                                <div className="relative mt-1">
                                    <input
                                        type="password"
                                        id="Password"
                                        name="Password"
                                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                        placeholder="Enter password"
                                        required

                                    />

                                    <span className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="stroke-2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="stroke-2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                                Sign in
                            </button>

                            <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                                
                                    <a className="hover:underline text-sm font-bold  px-2 dark:text-indigo-800">Sign up</a>
                                
                            </p>
                        </form>
                    </div>
                </div>




                
            </section>









        </>
    )
}

export default Login