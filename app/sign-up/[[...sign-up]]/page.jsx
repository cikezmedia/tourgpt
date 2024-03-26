import { SignUp } from "@clerk/nextjs";
const SignupPage = () => {
  return (
    <div className="flex flex-col mt-14 md:mt-24 justify-center">
      <SignUp />
    </div>
  );
};

export default SignupPage;
