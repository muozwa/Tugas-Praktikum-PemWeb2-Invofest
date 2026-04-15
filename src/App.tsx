import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";

function App() {
  return (
    <div className="flex gap-6 container mx-auto">
      <LoginForm />

      <RegisterForm />
    </div>
  );
}

export default App;