import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoNativeViewProps } from './ExpoNativeView.types';

const NativeView: React.ComponentType<ExpoNativeViewProps> =
  requireNativeViewManager('ExpoNativeView');

export default function ExpoNativeView(props: ExpoNativeViewProps) {
  return <NativeView {...props} />;
}
