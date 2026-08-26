const form = document.querySelector('#login-form')

if (form) {
  const status = document.querySelector('#login-status')

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    status.textContent = 'Signing you in...'
    status.className = 'text-sm text-gray-600 dark:text-gray-300'

    const supabaseClient = await window.supabaseReady
    if (!supabaseClient) {
      status.textContent = 'Login is not configured yet.'
      status.className = 'text-sm text-red-600'
      return
    }

    const formData = new FormData(form)
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: formData.get('email'),
      password: formData.get('password')
    })

    if (error) {
      status.textContent = error.message
      status.className = 'text-sm text-red-600'
      return
    }

    window.location.assign('../dashboard/')
  })

  document.querySelector('#forgot-password').addEventListener('click', async () => {
    const email = form.elements.email.value.trim()
    if (!email) {
      status.textContent = 'Enter your email first.'
      status.className = 'text-sm text-red-600'
      return
    }

    const supabaseClient = await window.supabaseReady
    const redirectTo = `${window.location.origin}${window.location.pathname.replace(/login\/$/, 'reset-password/')}`
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo })
    status.textContent = error ? error.message : 'Check your email for a password setup link.'
    status.className = error ? 'text-sm text-red-600' : 'text-sm text-green-600'
  })
}
