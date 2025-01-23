import { createPortal } from 'react-dom';

type Props = Parameters<typeof createPortal>;

const port = ([children, container, keys]: Props) => {
  return createPortal(children, container, keys);
};

export default port;
