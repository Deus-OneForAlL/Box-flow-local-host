export const STROKE_COLORS = [
  '#1e1e1e', // Dark charcoal (Excalidraw default)
  '#e03131', // Red
  '#2f9e44', // Green
  '#1971c2', // Blue
  '#f08c00', // Orange
  '#9c36b5', // Purple
  '#099268', // Teal
  '#868e96', // Gray
];

export const FILL_COLORS = [
  'transparent',
  '#ffc9c9', // Pastel Red
  '#b2f2bb', // Pastel Green
  '#a5d8ff', // Pastel Blue
  '#ffec99', // Pastel Yellow
  '#eebefa', // Pastel Purple
  '#96f2d7', // Pastel Teal
  '#f1f3f5', // Light Gray
];

export const STROKE_WIDTHS = [
  { label: 'Thin', value: 1.5 },
  { label: 'Medium', value: 2.5 },
  { label: 'Bold', value: 4 },
];

export const FONT_SIZES = [
  { label: 'Small', value: 16 },
  { label: 'Medium', value: 20 },
  { label: 'Large', value: 28 },
];

export const DEFAULT_BOX = {
  width: 160,
  height: 90,
  strokeColor: '#1e1e1e',
  strokeWidth: 2,
  strokeStyle: 'solid' as const,
  fillColor: '#a5d8ff',
  borderRadius: 8,
  text: '',
  textColor: '#1e1e1e',
  fontSize: 20,
  fontFamily: 'handwritten' as const,
};

export const DEFAULT_ARROW = {
  strokeColor: '#1e1e1e',
  strokeWidth: 2,
  strokeStyle: 'solid' as const,
};
