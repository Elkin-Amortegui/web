// src/app/search-results/page.tsx
// Sin 'use client' y SIN hooks de cliente aquí

import SearchResultsClient from './SearchResultsClient';

interface Props {
  searchParams: { q?: string }
}

export default function Page({ searchParams }: Props) {
  // Recibimos el parámetro desde Next.js en el servidor
  const initialQuery = searchParams.q ?? '';

  return (
    <SearchResultsClient initialQuery={initialQuery} />
  );
}
