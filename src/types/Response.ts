export type Sucesso = 'CREATED' | 'SUCCESS';
export type Error = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type SucessoResp<T> = {
  status: Sucesso;
  data: T;
};

export type ErroResp<T = string> = {
  status: Error;
  data: {
    message: T;
  };
};

export type Response<T, E = string> = SucessoResp<T> | ErroResp<E>;
