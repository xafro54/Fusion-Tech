const form = document.querySelector('#reset-password-form')

if (form) {
  (async () => {
  const status = document.querySelector('#reset-password-status')

  const supabaseClient = await window.supabaseReady
  if (!supabaseClient) {
    status.textContent = 'Password setup is not configured yet.'
    status.className = 'text-sm text-red-600'
  } else {
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      status.textContent = 'Saving your password...'
      status.className = 'text-sm text-gray-600 dark:text-gray-300'

      const formData = new FormData(form)
      if (formData.get('password') !== formData.get('password_confirmation')) {
        status.textContent = 'Passwords do not match.'
        status.className = 'text-sm text-red-600'
        return
      }

      const { error } = await supabaseClient.auth.updateUser({ password: formData.get('password') })
      if (error) {
        status.textContent = error.message
        status.className = 'text-sm text-red-600'
        return
      }

      status.textContent = 'Password saved. Taking you to your dashboard...'
      status.className = 'text-sm text-green-600'
      window.setTimeout(() => window.location.assign('../dashboard/'), 800)
    })
  }
  })()
}
