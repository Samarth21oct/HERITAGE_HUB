
import { useState } from "react"
import Modal from "../../popup/Modal"
import { BiLogOut } from "react-icons/bi"

export default function AuthorPopup() {
    const [open, setOpen] = useState(false)

    const handleLogout = async () => {
        console.log("logout clicked")
        setOpen(false);
        // try {
        //     const res = await fetch('${import.meta.env.VITE_HOST}/user/logout',
        //         {
        //             method: "GET",
        //             credentials: 'include',
        //         }
        //     )
        //     if (!res.ok) {
        //         throw new Error('Logout failed!')
        //     }
        //     window.location.href = '/'

        // } catch (error) {
        //     console.error(error);
        // }
    }


    return (
        <main className="App">

            <button onClick={() => setOpen(true)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-start" >Log out
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <BiLogOut size={56} className="mx-auto text-red-500" />
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-gray-800">Confirm Logout</h3>
                        <p className="text-sm text-gray-500">
                            Are you sure you want to Logout?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleLogout} className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg hover:bg-indigo-700 transition duration-300">
                            Logout
                        </button>
                        <button
                            className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg hover:bg-indigo-700 transition duration-300"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </main>
    )
}