---
title: "Create your Beacon account"
url: /signup/
---

<main class="mx-auto flex min-h-[70vh] max-w-md items-center justify-center px-6 py-16">
  <section class="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Beacon</p>
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Create your account</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-300">Start organizing your customer feedback today.</p>
    <form id="signup-form" class="space-y-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Email
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="email" name="email" required autocomplete="email">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Password
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="password" name="password" minlength="6" required autocomplete="new-password">
      </label>
      <p id="signup-plan" class="text-sm text-gray-600 dark:text-gray-300"></p>
      <button class="w-full rounded-lg bg-primary-600 px-4 py-2 font-semibold text-white hover:bg-primary-700" type="submit">Create account</button>
      <p id="signup-status" class="text-sm" role="status" aria-live="polite"></p>
    </form>
  </section>
</main>
<script type="module">
  const form = document.querySelector('#signup-form')
  const status = document.querySelector('#signup-status')
  const plan = new URLSearchParams(window.location.search).get('plan') || 'starter'
  document.querySelector('#signup-plan').textContent = `Selected plan: ${plan}`

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    status.textContent = 'Creating your account...'
    status.className = 'text-sm text-gray-600 dark:text-gray-300'

    if (!window.supabaseClient) {
      status.textContent = 'Signup is not configured yet.'
      status.className = 'text-sm text-red-600'
      return
    }

    const formData = new FormData(form)
    const { error } = await window.supabaseClient.auth.signUp({
      email: formData.get('email'),
      password: formData.get('password'),
      options: { data: { plan } }
    })

    if (error) {
      status.textContent = error.message
      status.className = 'text-sm text-red-600'
      return
    }

    form.reset()
    status.textContent = 'Check your email to confirm your account.'
    status.className = 'text-sm text-green-600'
  })
</script>