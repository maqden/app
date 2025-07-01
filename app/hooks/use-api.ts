import {useCallback, useState} from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = any>() {
  const [state, setState] = useState<ApiState<T>>({data: null, loading: false, error: null});

  const execute = useCallback(async (apiCall: () => Promise<T>) => {
    setState(prev => ({...prev, loading: true, error: null}));

    try {
      const data = await apiCall();

      setState({data, loading: false, error: null});

      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';

      setState(prev => ({...prev, loading: false, error: errorMessage}));

      throw error;
    }
  }, []);

  const reset = useCallback(() => {
    setState({data: null, loading: false, error: null});
  }, []);

  return {...state, execute, reset};
}