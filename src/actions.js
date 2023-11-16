export const ADD_CRYPTO = 'ADD_CRYPTO'
export const REMOVE_CRYPTO = 'REMOVE_CRYPTO'

export function addCrypto (crypto) {
    return {
        type: ADD_CRYPTO,
        crypto: {
            ...crypto
        }
    }
}

export function removeCrypto (crypto) {
  return {
      type: REMOVE_CRYPTO,
      crypto
  }
}
