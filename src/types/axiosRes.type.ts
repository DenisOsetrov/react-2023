import {AxiosPromise} from "axios";

export type Ires<T> = Promise<AxiosPromise<T>>
