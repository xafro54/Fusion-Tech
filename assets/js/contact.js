const form = document.querySelector('#contact-form')

if (form) {
  const status = document.querySelector('#contact-status')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    status.textContent = 'Sending your message...'
    status.className = 'text-sm text-gray-600 dark:text-gray-300'

    const supabaseClient = await window.supabaseReady
    if (!supabaseClient) {
      status.textContent = 'Contact form is not configured yet.'
      status.className = 'text-sm text-red-600'
      return
    }

    const formData = new FormData(form)
    const { error } = await supabaseClient.from('contact_messages').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })

    if (error) {
      status.textContent = error.message
      status.className = 'text-sm text-red-600'
      return
    }

    form.reset()
    status.textContent = 'Thanks. Your message has been sent.'
    status.className = 'text-sm text-green-600'
  })
}
