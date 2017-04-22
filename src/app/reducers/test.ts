export interface State {
  ids: string[];
  loading: boolean;
  query: string;
};

export const clock = (state = new Date()) => {
    return state;
};