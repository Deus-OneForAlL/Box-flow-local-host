export type ElementType = 'box' | 'arrow';

export type StrokeStyle = 'solid' | 'dashed' | 'dotted';

export interface Point {
  x: number;
  y: number;
}

export interface BoxElement {
  id: string;
  type: 'box';
  x: number;
  y: number;
  width: number;
  height: number;
  strokeColor: string;
  strokeWidth: number;
  strokeStyle: StrokeStyle;
  fillColor: string;
  borderRadius: number;
  text: string;
  textColor: string;
  fontSize: number;
  fontFamily: 'sans' | 'handwritten';
}

export interface ArrowElement {
  id: string;
  type: 'arrow';
  fromBoxId: string | null;
  fromPoint: Point;
  toBoxId: string | null;
  toPoint: Point;
  strokeColor: string;
  strokeWidth: number;
  strokeStyle: StrokeStyle;
}

export type CanvasElement = BoxElement | ArrowElement;

export type ToolType = 'select' | 'box' | 'arrow' | 'eraser';

export type HandleType = 'nw' | 'ne' | 'se' | 'sw' | 'n' | 's' | 'e' | 'w';

export interface DragState {
  mode: 'create' | 'move' | 'resize' | 'connect' | 'pan';
  origin: Point;
  current: Point;
  handle?: HandleType;
  selectedSnapshot?: CanvasElement[];
  initialElement?: CanvasElement;
}
