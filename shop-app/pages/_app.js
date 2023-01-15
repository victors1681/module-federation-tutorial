
import dynamic from 'next/dynamic'

const App = dynamic(
  async () => {
    return import('./__asyncApp');
  },
  {
    ssr: false,
  },
);

function MyApp(props) {
  return <App {...props} />;
}

export default MyApp;
