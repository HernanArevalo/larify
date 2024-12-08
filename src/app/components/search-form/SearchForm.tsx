'use client'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import debounce from 'lodash.debounce'
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchForm = () => {
  const router = useRouter()
  const [input, setInput] = useState('');
  const params = useSearchParams();
  const query = params.get('artist')

  const debouncedSearch = debounce(() => {
    router.push(`/?artist=${input}`)
  }, 500);

  useEffect(() => {
    if (input.trim() == '') {
      router.push('/')
    } else {
      debouncedSearch();
    }
    return () => debouncedSearch.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  useEffect(() => {
    if (query && query.trim() !== '') {
      setInput(query)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?artist=${input}`)

  }

  return (
    <>
      <h3>Buscá tu artista</h3>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
          placeholder="Quién querés ser?"
        />
        <button type="submit">
          <CiSearch size={20} />
        </button>
      </form>
    </>
  )
}
