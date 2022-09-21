import Container from '@/components/layout/container';
import React from 'react';
import { successToast } from '../common/toast';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('EMAIL', email);
    e.currentTarget.reset();

    setTimeout(() => {
      successToast('This is a dummy form, no email will be sent');
    }, 1000);
  };

  return (
    <div className="my-16">
      <Container>
        <div className="flex min-h-[40vh] w-full flex-col items-center justify-center gap-6 border border-orange-300 bg-gradient-to-r from-yellow-50 via-orange-100 to-yellow-50 px-6 py-4 text-center lg:my-16">
          <h2 className="max-w-2xl bg-gradient-to-b from-orange-400  to-orange-500 bg-clip-text font-sans text-3xl font-bold uppercase text-transparent md:text-4xl">
            Join my mailing list for discounts and latest works
          </h2>

          <form
            className="flex h-10 w-full max-w-md border border-orange-500"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="grow bg-orange-50 px-4 text-sm placeholder:text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-orange-500 px-4 text-orange-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
