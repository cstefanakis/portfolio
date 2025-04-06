/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Add this part to handle SVG imports
declare module "*.svg" {
  const content: string;
  export default content;
}
