interface Info {
  title: string;
  description: string;
}

interface Server {
  url: string;
  description: string;
}

export interface OpenapiPaths {
  [item: string]: OpenapiPathMethods;
}

export interface OpenapiPathMethods {
  post?: OpenapiParameter;
  get?: OpenapiParameter;
  put?: OpenapiParameter;
  delete?: OpenapiParameter;
}

export interface OpenapiRequestInterface {
  openapi: string;
  info: Info;
  servers: Server[];
  paths: OpenapiPaths;
}

export interface OpenapiMap {
  url: string;
  methods: OpenapiPathMethods;
}

export interface OpenapiParameter {
  name: string,
  schema: {
    type: string,
    format: string
  }
}
