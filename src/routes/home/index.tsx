import logo from '~/assets/images/logo.png';

function Home() {
  return (
    <div className="flex-1">
      <div className="flex justify-center">
        <img src={logo} className="h-24" />
      </div>
    </div>
  );
}

export default Home;
