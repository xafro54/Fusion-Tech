const dashboard = document.querySelector('#account-dashboard')

if (dashboard) {
  (async () => {
  const status = document.querySelector('#dashboard-status')
  const details = document.querySelector('#dashboard-details')

  const supabaseClient = await window.supabaseReady
  if (!supabaseClient) {
    status.textContent = 'Your account service is not configured.'
    return
  }

  const { data: { user }, error } = await supabaseClient.auth.getUser()
  if (error || !user) {
    status.textContent = 'Please confirm your email and sign in to view your dashboard.'
    return
  }

  const metadata = user.user_metadata || {}
  const fullName = [metadata.first_name, metadata.last_name].filter(Boolean).join(' ') || user.email
  document.querySelector('#dashboard-name').textContent = fullName
  document.querySelector('#dashboard-email').textContent = user.email || ''
  document.querySelector('#dashboard-plan').textContent = metadata.plan || 'starter'
  document.querySelector('#dashboard-company').textContent = metadata.company_name || 'Not provided'
  document.querySelector('#dashboard-role').textContent = metadata.job_role || 'Not provided'
  status.textContent = 'Your account is confirmed.'
  details.hidden = false

  document.querySelector('#dashboard-signout').addEventListener('click', async () => {
    await supabaseClient.auth.signOut()
    window.location.assign('../')
  })
  })()
}
