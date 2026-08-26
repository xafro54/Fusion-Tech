---
title: "Log in to Beacon"
url: /login/
---

<main class="mx-auto flex min-h-[70vh] max-w-md items-center justify-center px-6 py-16">
  <section class="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Beacon</p>
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome back</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-300">Log in to your account.</p>
    <form id="login-form" class="space-y-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Email
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="email" name="email" required autocomplete="email">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Password
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="password" name="password" required autocomplete="current-password">
      </label>
      <button class="w-full rounded-lg bg-primary-600 px-4 py-2 font-semibold text-white hover:bg-primary-700" type="submit">Log in</button>
      <button id="forgot-password" class="w-full text-sm font-medium text-primary-600 hover:underline" type="button">Forgot password?</button>
      <p id="login-status" class="text-sm" role="status" aria-live="polite"></p>
    </form>
    <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">New to Beacon? <a class="font-medium text-primary-600 hover:underline" href="../signup/">Create an account</a></p>
  </section>
</main>
