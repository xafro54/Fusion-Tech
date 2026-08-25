---
title: "Contact Beacon"
url: /contact/
lastmod: 2026-08-25
---

<main class="mx-auto flex min-h-[70vh] max-w-md items-center justify-center px-6 py-16">
  <section class="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Beacon</p>
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Talk to our team</h1>
    <p class="mb-6 text-gray-600 dark:text-gray-300">Tell us how we can help.</p>
    <form id="contact-form" class="space-y-4">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Name
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="text" name="name" required maxlength="120" autocomplete="name">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Email
        <input class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" type="email" name="email" required maxlength="320" autocomplete="email">
      </label>
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Message
        <textarea class="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-900" name="message" rows="5" required maxlength="5000"></textarea>
      </label>
      <button class="w-full rounded-lg bg-primary-600 px-4 py-2 font-semibold text-white hover:bg-primary-700" type="submit">Send message</button>
      <p id="contact-status" class="text-sm" role="status" aria-live="polite"></p>
    </form>
  </section>
</main>
