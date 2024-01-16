import type { FeatureFlipperConfiguration } from './type'
import type { WriteableRawKeyValueStore } from '../key-value-stores/type'

export type FeatureFlipperService<NAME> = {
  isEnabled: (name: NAME) => boolean
}

export const createFeatureFlipperService = <
  const T extends readonly FeatureFlipperConfiguration[]
>(featureFlippers: T, store: WriteableRawKeyValueStore<string | undefined>): FeatureFlipperService<T[number]['name']> => {

  const isEnabled = (name: string): boolean => {
    const formattedName = `FF_${name.toUpperCase()}`
    const processEnv = store.get(formattedName)
    return processEnv !== undefined
      ? processEnv === 'true'
      : featureFlippers.find(ff => ff.name === name)?.value ?? false
  }

  return {
    isEnabled,
  }
}
