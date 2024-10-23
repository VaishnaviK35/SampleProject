import { useQuery, useQueryClient } from "react-query";

export const Query = () => {
    const queryClient =  useQueryClient();

    const fetchData = async () => {
        // Point to an invalid URL to trigger failure
        console.log('Simulated API failure');
        
        throw new Error('Simulated API failure');
      };
      

    const { isLoading, error, data: Products, isFetching, isRefetching } = useQuery('products', 
        () =>
        
            fetch('https://dummyjson.com/products').then(res =>
                res.json()
              )
        ,
        {
            staleTime: 5000,
            // cacheTime: 60000,
            select: (data) => data.products,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 3
        }
      );

      const fetchProducts = () => {
        queryClient.invalidateQueries('products');
      }
    
      if (isLoading) return <p>Loading...</p>;
    
      if (error) return <p>An error has occurred: {error.message}</p>;

    //   if(isRefetching) return <p>Refetching....</p>

    //   if(isFetching) return <p>Fetching....</p>

      return (
        <div>
            With query 
            <br />
            <button onClick={fetchProducts}>Retry</button>
            <ul>
            {Products?.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
            </ul>
        </div>
      );
};