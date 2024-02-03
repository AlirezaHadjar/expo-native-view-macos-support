import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoNativeView.web.ts
// and on native platforms to ExpoNativeView.ts
import ExpoNativeViewModule from './ExpoNativeViewModule';
import ExpoNativeView from './ExpoNativeView';
import { ChangeEventPayload, ExpoNativeViewProps } from './ExpoNativeView.types';

// Get the native constant value.
export const PI = ExpoNativeViewModule.PI;

export function hello(): string {
  return ExpoNativeViewModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoNativeViewModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoNativeViewModule ?? NativeModulesProxy.ExpoNativeView);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoNativeView, ExpoNativeViewProps, ChangeEventPayload };
