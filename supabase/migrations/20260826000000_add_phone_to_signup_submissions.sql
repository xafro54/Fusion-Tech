alter table public.signup_submissions
  add column if not exists phone text;

update public.signup_submissions
set phone = phone_country || phone_number
where phone is null;

alter table public.signup_submissions
  drop constraint if exists signup_submissions_phone_check;

alter table public.signup_submissions
  add constraint signup_submissions_phone_check
  check (phone is null or length(trim(phone)) between 3 and 48);
