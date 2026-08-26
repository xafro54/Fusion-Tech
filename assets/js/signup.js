const form = document.querySelector('#signup-form')

if (form) {
  const status = document.querySelector('#signup-status')
  const plan = new URLSearchParams(window.location.search).get('plan') || 'starter'
  document.querySelector('#signup-plan').textContent = `Selected plan: ${plan}`

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    status.textContent = 'Creating your account...'
    status.className = 'text-sm text-gray-600 dark:text-gray-300'

    const supabaseClient = await window.supabaseReady
    if (!supabaseClient) {
      status.textContent = 'Signup is not configured yet.'
      status.className = 'text-sm text-red-600'
      return
    }

    const formData = new FormData(form)
    const redirectTo = `${window.location.origin}${window.location.pathname.replace(/signup\/$/, 'reset-password/')}`
    const temporaryPassword = `${crypto.randomUUID()}!Aa1`
    const { data: authData, error } = await supabaseClient.auth.signUp({
      email: formData.get('email'),
      password: temporaryPassword,
      options: {
        emailRedirectTo: redirectTo,
        data: {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          company_name: formData.get('company_name'),
          phone_country: formData.get('phone_country'),
          phone_number: formData.get('phone_number'),
          job_role: formData.get('job_role'),
          plan
        }
      }
    })

    if (error) {
      status.textContent = error.message
      status.className = 'text-sm text-red-600'
      return
    }

    const { error: submissionError } = await supabaseClient.from('signup_submissions').insert({
      auth_user_id: authData.user?.id || null,
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      company_name: formData.get('company_name'),
      phone_country: formData.get('phone_country'),
      phone_number: formData.get('phone_number'),
      job_role: formData.get('job_role'),
      plan
    })

    if (submissionError) {
      status.textContent = `Account created, but signup details were not saved: ${submissionError.message}`
      status.className = 'text-sm text-red-600'
      return
    }

    form.reset()
    status.textContent = 'Check your email to confirm your account.'
    status.className = 'text-sm text-green-600'
  })
}
