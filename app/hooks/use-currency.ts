import {useCallback} from 'react';

export function useCurrency() {
  return useCallback((value: number, options?: Intl.NumberFormatOptions): string => {
    if (!value) return '';

    if (!options) {
      options = {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL'};
    }

    return new Intl.NumberFormat('pt-BR', options).format(value / 100);
  }, []);
}
