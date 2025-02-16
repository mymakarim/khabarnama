import { useInfiniteQuery, useQueryClient } from 'react-query'
import { useState, useEffect } from 'react'
import Post from './Post'
import BlogLoader from './skeleton/BlogLoader'
import SmallLoader from './skeleton/SmallLoader'

export default function Infinteblog({ type, type_id }) {
  let args = ''
  if (type && type_id) {
    args = `&${type}=${type_id}`
  }
  const [page, setPage] = useState(1)
  const [totalpages, setTotalpages] = useState(1)

  const queryClient = new useQueryClient()

  // useEffect(() => {
  //   return () => {
  //     setPage(1)
  //     setTotalpages(1)
  //     console.log('TYPE_ID CHANGED')
  //     console.log('PAGE', page)
  //   }
  // }, [type_id])

  useEffect(() => {
    return async () => {
      await queryClient.prefetchInfiniteQuery(
        !type_id ? 'projects' : `${type + type_id}`,
        () =>
          fetch(
            `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&per_page=10${args}&page=${
              page + 1
            }`
          ).then((res) => res.json()),
        { keepPreviousData: true }
      )
    }
  }, [page])

  const fetchProjects = async () => {
    // console.log('PAGE: ', page)
    // console.log(
    //   'URL: ',
    //   `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true${args}&per_page=10&page=` +
    //     (page == null ? 1 : page)
    // )
    const res = await fetch(
      `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true${args}&per_page=10&page=` +
        (page == null ? 1 : page)
    )
    const totalPages = res.headers.get('X-WP-TotalPages')
    const posts = res.json()
    setPage(page + 1)
    setTotalpages(totalPages)
    return posts
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
    isRefetching
  } = useInfiniteQuery(!type_id ? 'projects' : `${type + type_id}`, fetchProjects, {
    getNextPageParam: (lastPage) => {
      return page < totalpages ? page + 1 : undefined
    },
    keepPreviousData: true
  })

  // console.log('IS REFETCHING: ', isRefetching)
  // console.log('DATA: ', data)
  // console.log('isFetching: ', isFetching)
  // console.log('isFetchingNextPage: ', isFetchingNextPage)

  return isLoading ? (
    <BlogLoader className='z-0 pl-5 md:pl-0 pr-5 w-full' />
  ) : status === 'error' ? (
    <p className='z-0 my-5 text-center text-indigo-800 font-semibold'>Error: {error.message}</p>
  ) : (
    <div className='z-0 relative'>
      {isRefetching && (
        <div className='flex flex-col items-center justify-center gap-2 text-semibold'>
          <div className='w-14 flex items-center justify-center'>
            <SmallLoader />
            <SmallLoader />
            <SmallLoader />
          </div>
        </div>
      )}
      {data.pages.map((post, i) => post.map((postitem, i) => <Post post={postitem} />))}
      <div className='flex items-center justify-center my-5'>
        <button
          className='rounded-full text-sm md:text-base px-6 py-2 bg-indigo-700 text-white hover:bg-indigo-800'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'منتظر باشید...'
            : hasNextPage
            ? 'بارگزاری بیشتر'
            : 'بیشتر موجود نیست!'}
        </button>
      </div>
    </div>
  )
}
