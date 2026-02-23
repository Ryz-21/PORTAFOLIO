import React, { useState } from 'react'
import { sendMessage } from '../service/MessageService'

export default function Contacto() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const response = await sendMessage({ name, email, content: message });
      console.log('Respuesta del servidor:', response);
      setStatus('Mensaje enviado correctamente');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto animate-reveal">
      <h2 className="text-5xl font-black uppercase mb-8">Contacto</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          className="w-full p-4 border-2 border-black dark:border-white 
             bg-transparent font-bold outline-none 
             text-black dark:text-gray-400 placeholder-black dark:placeholder-gray-500"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full p-4 border-2 border-black dark:border-white 
             bg-transparent font-bold outline-none 
             text-black dark:text-gray-400 placeholder-black dark:placeholder-gray-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          rows="5"
          className="w-full p-4 border-2 border-black dark:border-white 
             bg-transparent font-bold outline-none 
             text-black dark:text-gray-400 placeholder-black dark:placeholder-gray-500"
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn-alive w-full py-4 text-xl">Enviar</button>
      </form>
      {status && (
        <p className={`mt-4 font-bold ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </p>
      )}
    </section>
  )
}
