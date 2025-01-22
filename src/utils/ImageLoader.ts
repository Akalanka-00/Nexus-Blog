
export const ImageLoader = ( src: string ) => {
    const basePath = process.env.NODE_ENV !== 'production' ? 'https://akalanka-00.github.io/Nexus-Blog' : '';
    return `${basePath}${src}`;
  };
  