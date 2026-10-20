export const API_URL = "http://localhost:3000"

/**
 * Query Key Factory 패턴
 */
export const QUERY_KEYS = {
  todo: {
    all: ['todo'], // todo와 관련된 모든 캐시 무효화
    list: ['todo', 'list'], // todo list의 캐시 데이터들만 무효화
    detail: (id:string) => ['todo', 'detail', id], // todo detail의 id에 해당하는 캐시 데이터만 무효화
  }
}