import React, { useState } from "react";

function Registro() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data del formulario:", formData);

        setMessage(`${formData.name}, te has registrado 𓆝 𓆟 𓆞 𓆝`);

        //limpiar el form
        setFormData({
            name: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className=" max-w-md mx-auto mt-8 p-4 border rounded-xl bg-cyan-900">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                registro
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-rose-300 font-medium">
                        name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-rose-300 font-medium">
                        email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-rose-300 font-medium">
                        contraseña:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        registrate
                    </button>
                </div>
            </form>

            {message && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-tl-lg rounded-br-lg relative">
                    {message}
                </div>
            )}
        </div>
    );
}

export default Registro;
