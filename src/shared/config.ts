export interface ConfigType {
  basename: string;
  defaultPath: string;
  fontFamily: string;
  borderRadius: number;
}

const config: ConfigType = {
  basename: '',
  defaultPath: '/',
  fontFamily: `Roboto, sans-serif`,
  borderRadius: 8,
};

export default config;
