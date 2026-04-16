export interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

export interface Component {
  title: string;
  slug: string;
  label?: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  version: string;
  status: string;
  registryUrl: string;
  usage: {
    import: string;
    code: string;
  };
  preview: {
    type: string;
    props: any;
  };
  props: Prop[];
  dependencies?: string[];
}
