'use client'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/navigation';

export const SearchForm = () => {
  const router = useRouter()
  const [input, setInput] = useState('duki');
  
    const debouncedSearch = debounce(() => {
      router.push(`/?artist=${input}`)
    }, 500);
  
    useEffect(() => {
      if (input.length >= 3) {
        debouncedSearch();
      }
      return () => debouncedSearch.cancel();
    }, [input]);
  

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    };

  return (
    <>
      <h3>Search your artist</h3>
      <form className="search-form">
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
          placeholder="Who you want to be?"
        />
        <button type="submit" disabled={input.length < 3}>
          <CiSearch size={20} />
        </button>
      </form>
    </>
  )
}
