import React, { useRef, useState } from 'react'

export default function SubscribeForm() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null)
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    setMessage('')
    if (!inputEl.current.value) {
      setMessage('Tu dirección de email es necesaria')
    }

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setMessage(`❌ ${error}`)
      return
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = ''
    setMessage('✅ Listo, estás subscrito.')
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  return (
    <form className="mt-6 flex flex-col sm:max-w-md" onSubmit={subscribe}>
      <div className="sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          ref={inputEl}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neon sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          placeholder="Ingresa tu email"
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-neon px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-neon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon dark:hover:bg-gray-500"
          >
            Subscribirse
          </button>
        </div>
      </div>
      <div className="mt-2 block pl-2 text-sm text-gray-900 dark:text-gray-100">
        {message}
      </div>
    </form>
  )
}
