'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user'); // atau token

    if (!user) {
      router.push('/Login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return <>{children}</>;
}
