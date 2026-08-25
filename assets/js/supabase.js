import { createClient } from '@supabase/supabase-js'

const configElement = document.querySelector('[data-supabase-url]')
const supabaseUrl = configElement?.dataset.supabaseUrl
const supabaseAnonKey = configElement?.dataset.supabaseAnonKey

if (supabaseUrl && supabaseAnonKey) {
  window.supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn('Supabase is not configured. Set HUGO_SUPABASE_URL and HUGO_SUPABASE_ANON_KEY.')
}