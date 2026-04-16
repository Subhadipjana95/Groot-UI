export interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface Component {
  name: string;
  slug: string;
  description: string;
  category: string;
  installCommand: string;
  usageCode: string;
  props: Prop[];
  dependencies?: string[];
}
