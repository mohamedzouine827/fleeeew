import SignInForm from "../_components/SignIn"

const SignIn: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-8">Sign In</h1>
      <SignInForm />
    </div>
  )
}

export default SignIn