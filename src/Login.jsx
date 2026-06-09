import { useState } from 'react'
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState({})

    const validate = () => {
        let newError = {}

        if (!email.includes("@gmail.com")) {
            newError.email = "invalid email"

        }
         if(password.length < 6) {
            newError.password = "password must be 6 characters";
        }
        return newError;
    }



    const handleLogin = (e) => {
        e.preventDefault();
        const validation = validate();

        if (Object.keys(validation).length === 0) {
            toast.success("Login Success")

            setError({})
        }
        else {
            setError(validation);

        }

        
    }

    return (
        <div className='flex flex-col justify-around bg-white rounded-xl p-15 items-center m-auto w-[400px] h-[450px] mt-20 shadow-2xl'>
            <h1 className='text-3xl text-center font-bold text-blue-500'><i className="fa-solid fa-user text-3xl"></i>Login</h1>

            <form action="" onSubmit={handleLogin} className='flex flex-col gap-7 p-10 h-[250px] items-center justify-center'>
                <div className={`shadow-2xl flex gap-3 p-2 ${error.email && "border border-red-500"}`}>
                    <i className="fa-solid fa-envelope text-xl mt-2"></i>
                    <input
                        type="email"
                        placeholder='Enter Your Email'
                        className='font-bold p-1 w-[250px]'
                        onChange={(e) => setEmail(e.target.value)} />

                </div>
                {error.email && (
                    <p className="text-red-500 text-sm w-[300px]">{error.email}</p>
                )}

                <div className={`shadow-2xl flex gap-3 p-2 ${error.password && "border border-red-500"}`}>
                    <i className="fa-solid fa-lock text-xl mt-2"></i>
                    <input type="password"
                        placeholder='Enter Your Password'
                        className='font-bold p-1 w-[250px]'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error.password && (
                    <p className="text-red-500 text-sm w-[300px] border-red-500">{error.password}</p>
                )}

                <button type='submit' onClick={handleLogin} disabled={!email || !password} className='bg-gray-500 cursor-pointer disabled:bg-gray-500 disable:opacity-50 disabled:cursor-not-allowed text-white px-7 hover:bg-blue-600 flex gap-3 py-1 font-bold'><i className="fa-solid fa-user-clock text-xl"></i>Log in</button>
            </form>

        </div>
    )
}

export default Login
