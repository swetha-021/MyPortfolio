import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')
    const formData = new FormData(event.target)
    formData.append('access_key', '5b444226-be78-49ea-9924-4ccdf136d0e0')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Message sent.')
      event.target.reset()
    } else {
      setResult(data.message)
    }
  }

  return (
    <div id="contact" className="bg-[#ffebac]">
      <div className="w-full px-[8%] pt-8 pb-16 md:px-[12%]">
        <h2 className="mx-auto mb-8 max-w-2xl font-Ovo text-4xl text-black sm:text-5xl">
          Get in touch
        </h2>

        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
        >
          <div className="flex items-center justify-between bg-[#404040] px-4 py-2.5 text-sm text-white">
            <span className="font-medium">New message</span>
            <div className="flex items-center gap-3 text-white/80" aria-hidden="true">
              <span className="text-lg leading-none">–</span>
              <span className="text-xs leading-none">▢</span>
              <span className="text-base leading-none">×</span>
            </div>
          </div>

          <label className="flex items-center gap-3 border-b border-black/10 px-4 py-2.5">
            <span className="w-14 shrink-0 text-sm text-black/50">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/35"
            />
          </label>

          <label className="flex items-center gap-3 border-b border-black/10 px-4 py-2.5">
            <span className="w-14 shrink-0 text-sm text-black/50">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/35"
            />
          </label>

          <label className="block px-4 pt-3">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              rows="10"
              required
              placeholder="Compose email"
              className="w-full resize-none bg-transparent text-sm text-black outline-none placeholder:text-black/35"
            />
          </label>

          <div className="flex items-center gap-4 px-4 py-3">
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#0b57d0] px-6 py-2 text-sm font-medium text-white hover:bg-[#0842a0]"
            >
              Send
            </button>
            {result ? (
              <p className="text-sm text-black/60">{result}</p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
