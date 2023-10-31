interface IRes<TData = unknown> {
  code: number;
  error: string;
  data: TData;
}

interface IUser {
  name: string;
  avatar: string;
}
