import { createClient } from '@supabase/supabase-js'
import { Database } from './db-types'

// These should be environment variables in a real application
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || ''

// Debug logging in development
if (process.env.NODE_ENV === 'development') {
  console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
  console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Not set')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Type for the subscribers table
export type Subscriber = {
  id: string
  email: string
  created_at: string
  updated_at: string
  status: 'active' | 'unsubscribed'
}

// Type for the greenbeam schema subscribers table
export type GreenbeamSubscriber = Subscriber