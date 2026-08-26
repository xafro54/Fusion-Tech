---
title: "Your Beacon dashboard"
url: /dashboard/
---

<main id="account-dashboard" class="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-16">
  <section class="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Beacon</p>
    <h1 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome, <span id="dashboard-name">there</span></h1>
    <p id="dashboard-status" class="mb-6 text-gray-600 dark:text-gray-300">Checking your account...</p>
    <div id="dashboard-details" hidden class="space-y-4">
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"><p class="text-sm text-gray-500">Email</p><p id="dashboard-email" class="font-medium text-gray-900 dark:text-white"></p></div>
        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"><p class="text-sm text-gray-500">Plan</p><p id="dashboard-plan" class="font-medium capitalize text-gray-900 dark:text-white"></p></div>
        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"><p class="text-sm text-gray-500">Company</p><p id="dashboard-company" class="font-medium text-gray-900 dark:text-white"></p></div>
        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-900"><p class="text-sm text-gray-500">Job role</p><p id="dashboard-role" class="font-medium text-gray-900 dark:text-white"></p></div>
      </div>
      <button id="dashboard-signout" class="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700" type="button">Sign out</button>
    </div>
  </section>
</main>
