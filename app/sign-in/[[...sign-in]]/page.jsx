import { SignIn } from "@clerk/nextjs";

const SigninPage = () => {
  return (
    <div className="flex flex-col mt-24 justify-center">
      <SignIn />
    </div>
  );
};

export default SigninPage;
