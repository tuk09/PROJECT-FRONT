import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";
import Header from "./layout/Header";
// import UserHome from "./layout/UserHome";

function App() {
  const {loading} = useAuth()

  if(loading) {
    return (
      <p className="text-4xl text-primary">Loading..</p>
    )
  }

  return (
    <div className="min-h-screen">
      <AppRouter />


    </div>
  );
}

export default App;
