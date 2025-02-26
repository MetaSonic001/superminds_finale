'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/Homepage');
  };

  return (
    <div>
      <button
        onClick={handleNavigation}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Homepage
      </button>
    </div>
  );
}
