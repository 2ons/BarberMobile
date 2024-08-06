import React, { useState } from 'react'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    datetime: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Tack för din bokning! Vi kontaktar dig snart.')
        setFormData({ name: '', email: '', phone: '', datetime: '' })
      } else {
        alert('Det uppstod ett fel. Försök igen senare.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Det uppstod ett fel. Försök igen senare.')
    }
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Boka en tid</h2>
      <input type="text" name="name" placeholder="Namn" required value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="E-post" required value={formData.email} onChange={handleChange} />
      <input type="tel" name="phone" placeholder="Telefon" required value={formData.phone} onChange={handleChange} />
      <input type="datetime-local" name="datetime" required value={formData.datetime} onChange={handleChange} />
      <button type="submit">Skicka förfrågan</button>
    </form>
  )
}

export default AppointmentForm
