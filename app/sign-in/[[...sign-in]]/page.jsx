import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <div className="py-20 justify-center">
      <SignIn />
    </div>
  );
};

export default SigninPage;
