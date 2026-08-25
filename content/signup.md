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
        Full name
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="text" name="full_name" required autocomplete="name">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Company name
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="text" name="company_name" required autocomplete="organization">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Email
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="email" name="email" required autocomplete="email">
      </label>
      <fieldset class="space-y-2">
        <legend class="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone number</legend>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <select class="block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" name="phone_country" autocomplete="tel-country-code" required>
            <option value="">Country code</option>
            <optgroup label="Africa">
              <option value="+DZ">Algeria (+213)</option>
              <option value="+AO">Angola (+244)</option>
              <option value="+BJ">Benin (+229)</option>
              <option value="+BW">Botswana (+267)</option>
              <option value="+CM">Cameroon (+237)</option>
              <option value="+CI">Cote d'Ivoire (+225)</option>
              <option value="+EG">Egypt (+20)</option>
              <option value="+ET">Ethiopia (+251)</option>
              <option value="+GH">Ghana (+233)</option>
              <option value="+KE">Kenya (+254)</option>
              <option value="+MA">Morocco (+212)</option>
              <option value="+MZ">Mozambique (+258)</option>
              <option value="+NG">Nigeria (+234)</option>
              <option value="+RW">Rwanda (+250)</option>
              <option value="+SN">Senegal (+221)</option>
              <option value="+ZA">South Africa (+27)</option>
              <option value="+TZ">Tanzania (+255)</option>
              <option value="+TN">Tunisia (+216)</option>
              <option value="+UG">Uganda (+256)</option>
              <option value="+ZM">Zambia (+260)</option>
              <option value="+ZW">Zimbabwe (+263)</option>
            </optgroup>
            <optgroup label="Americas">
              <option value="+AR">Argentina (+54)</option>
              <option value="+BR">Brazil (+55)</option>
              <option value="+CA">Canada (+1)</option>
              <option value="+MX">Mexico (+52)</option>
              <option value="+US">United States (+1)</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="+CN">China (+86)</option>
              <option value="+IN">India (+91)</option>
              <option value="+ID">Indonesia (+62)</option>
              <option value="+JP">Japan (+81)</option>
              <option value="+MY">Malaysia (+60)</option>
              <option value="+PH">Philippines (+63)</option>
              <option value="+SG">Singapore (+65)</option>
              <option value="+KR">South Korea (+82)</option>
              <option value="+TH">Thailand (+66)</option>
              <option value="+AE">United Arab Emirates (+971)</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="+AT">Austria (+43)</option>
              <option value="+BE">Belgium (+32)</option>
              <option value="+FR">France (+33)</option>
              <option value="+DE">Germany (+49)</option>
              <option value="+IE">Ireland (+353)</option>
              <option value="+IT">Italy (+39)</option>
              <option value="+NL">Netherlands (+31)</option>
              <option value="+PT">Portugal (+351)</option>
              <option value="+ES">Spain (+34)</option>
              <option value="+SE">Sweden (+46)</option>
              <option value="+CH">Switzerland (+41)</option>
              <option value="+GB">United Kingdom (+44)</option>
            </optgroup>
            <optgroup label="Oceania">
              <option value="+AU">Australia (+61)</option>
              <option value="+FJ">Fiji (+679)</option>
              <option value="+NZ">New Zealand (+64)</option>
            </optgroup>
          </select>
          <input class="block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="tel" name="phone_number" placeholder="Phone number" autocomplete="tel-national" required>
        </div>
      </fieldset>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Job role
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="text" name="job_role" autocomplete="organization-title">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Company size
        <select class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" name="company_size">
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="501+">501+ employees</option>
        </select>
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
      options: {
        data: {
          full_name: formData.get('full_name'),
          company_name: formData.get('company_name'),
          phone_country: formData.get('phone_country'),
          phone_number: formData.get('phone_number'),
          job_role: formData.get('job_role'),
          company_size: formData.get('company_size'),
          plan
        }
      }
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