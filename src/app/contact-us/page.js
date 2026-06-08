'use client';

import ContactUs from '@/components/contactus';
import { useRouter } from 'next/navigation';

export default function ContactUsPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <ContactUs onClose={handleClose} isModal={false} />
    </div>
  );
}

