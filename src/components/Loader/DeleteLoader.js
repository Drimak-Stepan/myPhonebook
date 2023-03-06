import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <FallingLines
      color="white"
      width="30"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};

export default Loader;
