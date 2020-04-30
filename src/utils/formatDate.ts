import { format, parseISO } from 'date-fns';

import { ptBR } from 'date-fns/locale'; // eslint-disable-next-line import/no-duplicates

const formatDate = (date: string): string =>
  format(parseISO(date), 'P', { locale: ptBR });

export default formatDate;
