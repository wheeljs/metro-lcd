import { graphic } from 'echarts';
import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import { theme } from './g2.project.json';

export function colors(): string[] {
  return theme.color;
}

export function linearGradient({ color, alpha = [1, 0.3] }: {
  color: ColorInput;
  alpha?: number[];
}) {
  const colorInstance = new TinyColor(color);
  const from = colorInstance.setAlpha(alpha[0]).toRgbString();
  const to = colorInstance.setAlpha(alpha[1]).toRgbString();

  return new graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: from },
    { offset: 1, color: to },
  ]);
}
